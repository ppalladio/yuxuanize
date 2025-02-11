'use client';
import { Sizes } from '@/lib/three-utils';
import Experience from '../Experience/Experience';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default class Camera {
    public controls!: OrbitControls;
    public sizes: Sizes;
    public scene: THREE.Scene;
    public canvas: HTMLCanvasElement;
    public perspectiveCamera!: THREE.PerspectiveCamera;
    public orthographicCamera!: THREE.OrthographicCamera;
    public frustum!: number;
    public axesHelper!: THREE.AxesHelper;
    constructor(private experience: Experience) {
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        // Create cameras first
        // this.createPerspectiveCamera();
        this.createOrthographicCamera();

        // Set up controls after cameras exist
        // this.setOrbitControl();

        this.resize();
        this.update();
    }

    // public createPerspectiveCamera() {
    //     this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
    //     this.perspectiveCamera.position.set(10, 17, 10);
    //     this.scene.add(this.perspectiveCamera);
    // }

    public createOrthographicCamera() {
        this.frustum = 10;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.frustum) / 2,
            (this.sizes.aspect * this.frustum) / 2,
            this.frustum / 2,
            -this.frustum / 2,
            -50,
            50,
        );

        this.orthographicCamera.rotation.x = -Math.atan(1 / Math.sqrt(2));
        this.orthographicCamera.position.set(0, 5.5, 5);
        // this.orthographicCamera.rotation.x = -Math.PI / 2;
        // this.orthographicCamera.zoom = 0.1;
        // this.orthographicCamera.updateProjectionMatrix();
        this.scene.add(this.orthographicCamera);
    }

    // private setOrbitControl() {
    //     // this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
    //     // this.controls.enableDamping = true;
    //     // this.controls.enableZoom = true;
    // }

    public resize() {
        // this.perspectiveCamera.aspect = this.sizes.aspect;
        // this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left = (-this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.top = this.frustum / 2;
        this.orthographicCamera.bottom = -this.frustum / 2;
        if (this.sizes.width > 1000) {
            this.orthographicCamera.zoom = 2;
        } else {
            this.orthographicCamera.zoom = 1;
        }
        this.orthographicCamera.updateProjectionMatrix();
    }
    public update() {
        // this.controls.update();
    }
}
