import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import Room from './Room';
import { Resources, Sizes } from '@/lib/three-utils';
import Camera from '../Camera';

export default class World {
    public experience: Experience;
    public room!: Room;
    public resources: Resources;
	public camera: Camera;
	public sizes: Sizes;
	public canvas: HTMLCanvasElement;
    constructor(experience: Experience) {
        this.experience = experience;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        this.resources.on('ready', () => {
            this.room = new Room(experience);
			console.log("world created")
        });
    }
}
