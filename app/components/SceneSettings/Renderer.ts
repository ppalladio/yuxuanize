import * as THREE from 'three';
import Experience from '../Experience/Experience';

export default class Renderer {
    private readonly experience: Experience;
    private readonly canvas: HTMLCanvasElement;
    private readonly sizes: any;
    private readonly scene: THREE.Scene;
    private readonly camera: any;
    private renderer!: THREE.WebGLRenderer;

    constructor(experience: Experience) {
        this.experience = experience;
        this.canvas = this.experience.canvas;
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.camera = this.experience.camera;

        this.setRenderer();
        this.resize();
        this.update();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });
        // physicallyCorrectLights is removed
        // this.renderer.physicallyCorrectLights = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.widths, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    public resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    public update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
}
