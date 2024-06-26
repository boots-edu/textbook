const iframeContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Execution iFrame</title>
    <script>
        var debugMode = true;
        function debugLog(...message) {
            if (debugMode) {
                console.log(...message);
            }
        }
        function debugError(where, error) {
            console.error(where, error);
            parent.postMessage({type: 'error', message: error.message}, '*');
        }
        function executeCode(code) {
            parent.postMessage({type: 'execution.begun', message: "Executing code"}, '*');
            const blob = new Blob([code], {type: 'application/javascript'});
            const worker = new Worker(URL.createObjectURL(blob));
            // Proxy messages back to parent
            worker.addEventListener('message', (e) => {
                debugLog("Iframe Web Worker Heard:", e)
                try {
                    e = JSON.parse(JSON.stringify(e.data));
                } catch (e) {
                    debugError("Iframe Web Worker Error during clone:", e);
                }
                try {
                    parent.postMessage(e, '*');
                } catch (e) {
                    debugError("Iframe Web Worker Error during postMessage:", e);
                }
            });
            worker.onerror = ((event) => {
                debugError("Iframe Web Worker Error during Execution:", event);
            });
        }

        let latestWebWorker = null;
        addEventListener("message", (event) => {
            debugLog("Iframe heard:", event);
            const data = event.data;
            // {type: 'execute', code: string}
            if (data.type === 'execute') {
                if (latestWebWorker !== null) {
                    latestWebWorker.terminate();
                }
                executeCode(data.code);
                // {type: 'terminate'}
            } else if (data.type === 'terminate') {
                if (latestWebWorker !== null) {
                    latestWebWorker.terminate();
                }
                // {type: 'debug', value: boolean?}
            } else if (data.type === 'debug') {
                debugMode = data.value != null ? data.value : !debugMode;
            } else {
                debugError("Iframe General Error: Unknown message type:", data.type);
            }
        });
        addEventListener("error", (event) => {
            debugError("Iframe Uncaught Error:", event);
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