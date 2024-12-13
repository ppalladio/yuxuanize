import Experience from '@/app/components/Experience/Experience';
import Renderer from '@/app/components/SceneSettings/Renderer';
import EventEmitter from 'events';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';

interface Asset {
    name: string;
    type: string;
    path: string;
}

interface Loaders {
    gltfLoader: GLTFLoader;
    dracoLoader: DRACOLoader;
}
const Assets: Asset[] = [
    {
        name: 'room',
        type: 'glbModel',
        path: '/webIso/webiso.glb',
    },
    {
        name: 'screen',
        type: 'videoTexture',
        path: '',
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
        this.emit('time update');
        window.requestAnimationFrame(() => this.update());
    };
}

class Resources extends EventEmitter {
    public renderer!: Renderer;
    public assets: Asset[];
    public experience: Experience;
    public items: { [key: string]: any } = {};
    public loaders!: Loaders;
    public queue: number;
    public assetLoaded: number;
    public video: { [key: string]: HTMLVideoElement } = {};
    public videoTexture: { [key: string]: THREE.VideoTexture } = {};
    public image: { [key: string]: HTMLImageElement } = {};
    constructor(assets: Asset[], experience: Experience) {
        super();
        this.experience = experience;
        this.renderer = this.experience.renderer;
        this.assets = assets;
        this.items = {};
        this.queue = this.assets.length;
        this.assetLoaded = 0;

        this.setLoaders();
        this.startLoading();
        // console.log('assets', this.assets);
    }

    setLoaders() {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');

        this.loaders = {
            gltfLoader: new GLTFLoader(),
            dracoLoader: dracoLoader,
        };

        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }
    public startLoading() {
        for (const asset of this.assets) {
            if (asset.type === 'glbModel') {
                this.loaders.gltfLoader.load(asset.path, (f) => {
                    this.assetInfo(asset, f);
                });
            } else if (asset.type === 'videoTexture') {
                this.video = {};
                this.videoTexture = {};
                this.video[asset.name] = document.createElement('video');
                this.video[asset.name].src = asset.path;
                this.video[asset.name].playsInline = true;
                this.video[asset.name].autoplay = true;
                this.video[asset.name].muted = true;
                this.video[asset.name].play();

                this.videoTexture[asset.name] = new THREE.VideoTexture(this.video[asset.name]);
                // depending on final result
                this.videoTexture[asset.name].flipY = true;
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].generateMipmaps = false;
                this.videoTexture[asset.name].colorSpace = THREE.SRGBColorSpace;

                this.assetInfo(asset, this.videoTexture[asset.name]);
            }
            //  else if ((asset.type === 'image')) {
            //     this.image[asset.name] = document.createElement('img');
            //     this.image[asset.name].src = asset.path;
            //     this.image[asset.name].width = 1920;
            // }
        }
    }
    public assetInfo(asset: Asset, file: GLTF | THREE.VideoTexture) {
        this.items[asset.name] = file;
        this.assetLoaded++;
        console.log('asset loading');
        if (this.assetLoaded === this.queue) {
            console.log('finish loading');
            this.emit('ready');
        }
    }
}
export { Sizes, Time, Assets, Resources };
