import * as THREE from 'three';
import Experience from '../../Experience/Experience';

export default class Room {
    public experience: Experience;
    public scene: THREE.Scene;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }
}
