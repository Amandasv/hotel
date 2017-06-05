import { Injectable } from '@angular/core';
import { User } from "app/user/user";


@Injectable()
export class UserService {
  users: User[] = [{
    id: 1,
    name: "nome",
    email: "usuario@email.com",
    birthdate: "01/01/1990",
    rg: "1234567890"
  }];

  autoIncrement:number = 1;

constructor() { }

  getUsers(){
    console.log('users: ', this.users);
    return this.users;
  }

  addUser(room: User){
    room.id = this.autoIncrement++;
    this.users.push(room);
  }

  deleteUser(room: User){
    let index = this.users.indexOf(room, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(id: number, room: User){
    let index = this.users.indexOf(this.getUserById(id), 0);
    this.users[index] = room;
  }

  getUserById(id: number){
    return this.users.find(room => room.id == id);
  }

}
