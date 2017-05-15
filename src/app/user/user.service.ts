import { Injectable } from '@angular/core';
import { User } from "app/user/user";

@Injectable()
export class UserService {

  users: User[] = [{
    name: 'nome',
    email: 'email@email.com',
    birthdate: '2017/01/01',
    cpf: 123456
  }];

  constructor() { }

  getUsers(){
    console.log('users: ', this.users);
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }
}