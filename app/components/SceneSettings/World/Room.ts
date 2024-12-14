import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
import { GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader.js';
interface RoomProps {
    animation: [];
    assets: {};
    cameras: [];
    parser: GLTFParser;
    scene: THREE.Group;
    scenes: [THREE.Group];
    userData: {};
}
export default class Room {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;
    public room: RoomProps;
    public roomObject: THREE.Object3D;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.roomObject = this.room.scene;
        this.setModel();
    }
    setModel() {
        this.roomObject.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                });
            }

            if (child.name === 'screen') {
                (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }
            if (child.name === 'walkwayGlass') {
                // console.log(`${child.name} position:`, {
                // 	x: child.position.x,
                // 	y: child.position.y,
                // 	z: child.position.z
                // });
                (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                    emissive: 'white',
                    roughness: 0,
                    transmission: 1,
                    opacity: 0.5,
                    emissiveIntensity: 1,
                });
            }
        });
        this.roomObject.scale.set(0.3, 0.3, 0.3);
        this.scene.add(this.roomObject);
    }
	public update() {}
}
