class Sizes {
    public width: number;
    public height: number;
    public aspect: number;
    public pixelRatio: number;

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        });
    }
}

class Time {
    public start: number;
    public current: number;
    public elapsed: number;
    public delta: number;
    constructor() {
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        this.update();
    }
    private update() {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        // the time to play animation Ns after scene started
        this.elapsed = this.current - this.start;
		// console.log(this.delta);
        window.requestAnimationFrame(() => this.update());
    }
}
export { Sizes, Time };
