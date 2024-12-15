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
    public helper!: THREE.CameraHelper;
    constructor(private experience: Experience) {
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        // Create cameras first
        this.createPerspectiveCamera();
        this.createOrthographicCamera();

        // Set up controls after cameras exist
        this.setOrbitControl();

        this.resize();
        this.update();
    }

    public createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
        this.perspectiveCamera.position.set(0.6, 7, 10);
        this.scene.add(this.perspectiveCamera);
    }

    public createOrthographicCamera() {
        this.frustum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.frustum) / 2, (this.sizes.aspect * this.frustum) / 2, this.frustum / 2, -this.frustum / 2, -20, 20);
        const size = 20;
        const division = 20;
        const gridHelper = new THREE.GridHelper(size, division);
        const axesHelper = new THREE.AxesHelper(10);
        this.helper = new THREE.CameraHelper(this.orthographicCamera);
        this.scene.add(this.helper);
        this.scene.add(gridHelper);
        this.scene.add(axesHelper);
        this.scene.add(this.orthographicCamera);
    }

    private setOrbitControl() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
    }

    public resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left = (-this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.frustum) / 2;
        this.orthographicCamera.top = this.frustum / 2;
        this.orthographicCamera.bottom = -this.frustum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    public update() {
        // console.log(this.perspectiveCamera.position);
        // console.log(this.orthographicCamera.position);
        this.controls.update();
        this.helper.matrixWorldNeedsUpdate = true;
        this.helper.update();
        this.helper.position.copy(this.orthographicCamera.position);
        this.helper.rotation.copy(this.orthographicCamera.rotation);
    }
}
