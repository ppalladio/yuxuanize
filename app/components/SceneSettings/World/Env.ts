import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
export default class Env {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;
    public sunlight!: THREE.DirectionalLight;
    public ambientLight!: THREE.AmbientLight;
    public pointlight!: THREE.PointLight;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;

        this.setSunlight();
    }
    setSunlight() {
        this.sunlight = new THREE.DirectionalLight(0xffffff, 2);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        this.sunlight.shadow.mapSize.set(1024, 1024);
        this.sunlight.shadow.normalBias = 0.05;
        const lightHelper = new THREE.CameraHelper(this.sunlight.shadow.camera);
        this.scene.add(lightHelper);
        this.sunlight.position.set(-3, 7, 5);

        this.scene.add(this.sunlight);

        this.ambientLight = new THREE.AmbientLight(0xffffff,2.5);
        this.scene.add(this.ambientLight);
    }
}
