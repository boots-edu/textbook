export class Timer {
    private instance: number | null;
    public time: number;
    private startTime: number;
    private where: HTMLElement;

    constructor(where: HTMLElement) {
        this.time = 0;
        this.startTime = 0;
        this.instance = null;
        this.where = where;
    }

    destroy() {
        if (this.instance) {
            clearInterval(this.instance);
        }
    }

    reset() {
        if (this.instance != null) {
            clearInterval(this.instance);
        }
        this.instance = null;
        this.where.innerHTML = "";
    }

    stop() {
        if (this.instance != null) {
            clearInterval(this.instance);
        }
        this.instance = null;
        this.update();
    }

    start() {
        this.reset();
        this.startTime = Date.now();
        this.instance = window.setInterval(this.update.bind(this), 1000);
        this.update();
    }

    update() {
        const newTime = (Date.now() - this.startTime)/1000;
        this.time = newTime;
        this.where.innerHTML = Math.round(this.time)+" seconds";
    }

    isActive() {
        return this.instance != null;
    }

}