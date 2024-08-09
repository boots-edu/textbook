const iframeContent = /*html*/`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Execution iFrame</title>
    <script>
        var __knownEngineId = undefined;
        var __debugMode = true;
        function debugLog(...message) {
            if (__debugMode) {
                console.log(...message);
            }
        }
        function debugError(where, error, engineId) {
            console.error(where, error);
            parent.postMessage({type: 'error', message: error.message, engineId}, '*');
        }
        function validateLinking(variableNames) {
            for (const variableName of variableNames) {
                if (typeof window[variableName] === 'undefined') {
                    parent.postMessage({
                        type: 'error',
                        message: "Variable " + variableName + " not found in window",
                        engineId: __knownEngineId
                    }, '*');
                }
            }
        }
        function executeCodeInMain(code, engineId) {
            parent.postMessage({type: 'execution.begun', message: "Executing code", engineId}, '*');
            try {
                eval(code);
            } catch (e) {
                debugError("Iframe Main Error during Execution:", e, engineId);
            }
        }
        function forwardPostMessage(e, engineId) {
            try {
                e = JSON.parse(JSON.stringify(e.data));
            } catch (e) {
                debugError("Iframe Web Worker Error during clone:", e, engineId);
            }
            try {
                e = {...e, engineId};
            } catch (e) {
                debugError("Iframe Web Worker Error while attaching engineId:", e, engineId);
            }
            try {
                parent.postMessage(e, '*');
            } catch (e) {
                debugError("Iframe Web Worker Error during postMessage:", e, engineId);
            }
        }
        function executeCodeInWorker(code, engineId) {
            parent.postMessage({type: 'execution.begun', message: "Executing code", engineId}, '*');
            const blob = new Blob([code], {type: 'application/javascript'});
            const worker = new Worker(URL.createObjectURL(blob));
            // Proxy messages back to parent
            worker.addEventListener('message', (e) => {
                debugLog("Iframe Web Worker Heard:", e)
                forwardPostMessage(e, engineId);
            });
            worker.onerror = ((event) => {
                debugError("Iframe Web Worker Error during Execution:", event, engineId);
            });
        }

        let __latestWebWorker = null;
        addEventListener("message", (event) => {
            debugLog("Iframe heard:", event);
            const data = event.data;
            if (data.engineId != null) {
                __knownEngineId = data.engineId; // Try to keep track of the engineId
            }
            // {type: 'execute', code: string, useWorker: boolean}
            if (data.type === 'execute') {
                if (__latestWebWorker !== null) {
                    __latestWebWorker.terminate();
                }
                if (data.useWorker) {
                    executeCodeInWorker(data.code, data.engineId);
                } else {
                    executeCodeInMain(data.code, data.engineId);
                }
                // {type: 'terminate'}
            } else if (data.type === 'terminate') {
                if (__latestWebWorker !== null) {
                    __latestWebWorker.terminate();
                }
                // {type: 'debug', value: boolean?}
            } else if (data.type === 'debug') {
                __debugMode = data.value != null ? data.value : !__debugMode;
            } else if (data.type === 'validate') {
                validateLinking(data.variableNames);
            } else if (data.isForParent) {
                forwardPostMessage({
                    data: {
                        type: data.type,
                        contents: data.contents,
                        engineId: __knownEngineId
                    }
                }, __knownEngineId);
            } else {
                debugError("Iframe General Error: Unknown message type:", data.type, data.engineId);
            }
        });
        addEventListener("error", (event) => {
            debugError("Iframe Uncaught Error:", event, __knownEngineId);
        });
    </script>
</head>
<body>

</body>
</html>`;

export function makeIFrame() {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.srcdoc = iframeContent;
    document.body.appendChild(iframe);
    return iframe;
}

export function executeCodeInIFrame(iframe: HTMLIFrameElement, code: string, engineId: string, useWorker = false) {
    iframe.contentWindow?.postMessage({type: 'execute', code, engineId, useWorker}, '*');
}

export function terminateIFrame(iframe: HTMLIFrameElement, engineId: string) {
    iframe.contentWindow?.postMessage({type: 'terminate', engineId}, '*');
}

export function toggleIFrameDebug(iframe: HTMLIFrameElement, engineId: string, value?: boolean) {
    iframe.contentWindow?.postMessage({type: 'debug', value, engineId}, '*');
}

export function sendDataToIframe(iframe: HTMLIFrameElement, variableName: string, data: any) {
    const target = iframe.contentWindow;
    if (target === null) {
        console.error("IFrame contentWindow is null");
        return;
    } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        target[variableName as any] = data;
    }
}