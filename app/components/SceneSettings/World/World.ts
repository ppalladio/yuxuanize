import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import Room from './Room';

export default class World {
    public experience: Experience;
    public room: Room;
    constructor(experience: Experience) {
        this.experience = experience;
        this.room = new Room(experience);
    }
}
