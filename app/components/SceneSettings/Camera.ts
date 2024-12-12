import { Sizes } from '@/lib/three-utils';
import Experience from '../Experience/Experience';
import * as THREE from 'three';

export default class Camera {
    public sizes: Sizes;
    public scene: THREE.Scene;
    public canvas: HTMLCanvasElement;
    public perspectiveCamera!: THREE.PerspectiveCamera;
    public orthographicCamera!: THREE.OrthographicCamera;
    public frustum!: number;

    constructor(private experience: Experience) {
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        console.log('camera logs', this.sizes, this.scene, this.canvas);
        this.createOrthographicCamera();
        this.createPerspectiveCamera();
        this.resize();
        this.update();
    }
    private createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
        this.scene.add(this.perspectiveCamera);
    }
    private createOrthographicCamera() {
        this.frustum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.frustum) / 2, (this.sizes.aspect * this.frustum) / 2, this.frustum / 2, -this.frustum / 2, -100, 100);
        // potential for this.sizes.frustum
        this.scene.add(this.orthographicCamera);
    }
    private resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left = (-this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.top = this.frustum / 2;
        this.orthographicCamera.bottom = -this.frustum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    private update() {}
}
