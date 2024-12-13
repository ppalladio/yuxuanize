import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import Room from './Room';
import { Resources, Sizes } from '@/lib/three-utils';
import Camera from '../Camera';
import Env from './Env';

export default class World {
    public experience: Experience;
	public environment!: Env;
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
			this.environment = new Env(experience);
            this.room = new Room(experience);
			console.log("world created")
        });
    }
}
