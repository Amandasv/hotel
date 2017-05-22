import { Injectable } from '@angular/core';
import { User } from "app/user/user";

@Injectable()
export class UserService {

  users: User[] = [{
    id: 1,
    name: 'nome',
    email: 'email@email.com',
    birthdate: '2017/01/01',
    cpf: 123456
  }];

  autoIncremet:number = 1;

  constructor() { }

  getUsers(){
    console.log('users: ', this.users);
    return this.users;
  }

  addUser(user: User){
    user.id = this.autoIncremet++;
    this.users.push(user);
  }

  deleteUser(user: User){
    let index = this.users.indexOf(user, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(id: number, user: User){
    let index = this.users.indexOf(this.getUserById(id), 0);
    this.users[index] = user;
  }

  getUserById(id: number){
    return this.users.find(user => user.id == id);
  }

}