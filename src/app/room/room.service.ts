import { Injectable } from '@angular/core';
import { Room } from "./room";

@Injectable()
export class RoomService {
  rooms: Room[] = [{
    id: 1,
    roomNumber:"Quarto 1",
    category:"a",
    price:100,
    description:"a"
  }];

  autoIncrement:number = 1;

constructor() { }

  getRooms(){
    console.log('rooms: ', this.rooms);
    return this.rooms;
  }

  addRoom(room: Room){
    room.id = this.autoIncrement++;
    this.rooms.push(room);
  }

  deleteRoom(room: Room){
    let index = this.rooms.indexOf(room, 0);
    if (index > -1) {
      this.rooms.splice(index, 1);
    }
  }

  updateRoom(id: number, room: Room){
    let index = this.rooms.indexOf(this.getRoomById(id), 0);
    this.rooms[index] = room;
  }

  getRoomById(id: number){
    return this.rooms.find(room => room.id == id);
  }

}
