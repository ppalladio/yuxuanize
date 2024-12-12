import Experience from '@/app/components/Experience/Experience';
import Renderer from '@/app/components/SceneSettings/Renderer';
import EventEmitter from 'events';

const Assets: Asset[] = [
    {
        name: 'room',
        type: 'glbModel',
        path: '/public/webIso/webiso.glb',
    },
    {
        name: 'screen',
        type: 'videoTexture',
    },
];
class Sizes extends EventEmitter {
    public width: number;
    public height: number;
    public aspect: number;
    public pixelRatio: number;

    constructor() {
        super();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit('resize');
        });
    }
}

class Time extends EventEmitter {
    public start: number;
    public current: number;
    public elapsed: number;
    public delta: number;
    constructor() {
        super();
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        this.update();
    }

    private readonly update = () => {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        // the time to play animation Ns after scene started
        this.elapsed = this.current - this.start;
        // console.log(this.delta);
        this.emit('time update');
        window.requestAnimationFrame(() => this.update());
    };
}

interface Asset {
    name: string;
    type: string;
    path?: string;
}

class Resources extends EventEmitter {
    public renderer!: Renderer;
    public assets: Asset[];
    public experience: Experience;

    constructor(assets: Asset[], experience: Experience) {
        super();
        this.experience = experience;
        this.renderer = this.experience.renderer;
        this.assets = assets;
        // console.log('assets', this.assets);
    }
}
export { Sizes, Time, Assets, Resources };
