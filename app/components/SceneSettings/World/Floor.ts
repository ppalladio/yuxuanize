import * as THREE from 'three';
import Experience from '../../Experience/Experience';

export default class Floor {
    public experience!: Experience;
    public scene: THREE.Scene;

    public geometry!: THREE.PlaneGeometry;
    public material!: THREE.MeshStandardMaterial;
    public plane!: THREE.Mesh;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.setFloor();
    }
    setFloor() {
        this.geometry = new THREE.PlaneGeometry(100, 100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            roughness: 1,
            metalness: 0,
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.plane);
        this.plane.rotation.x = -Math.PI / 2;
		this.plane.position.y=-0.3
		this.plane.receiveShadow = true;
    }
}
