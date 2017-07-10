import { Injectable } from '@angular/core';
import { User } from "app/user/user";
// import { Observable } from 'rxjs/RX';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  users: User[] = [];
  resourceUrl = "https://senacnodebackend.herokuapp.com/users";

constructor(private http:Http) {

}

  getUsers():Observable<User[]>{
    return this.http.get(this.resourceUrl)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }

  addUser(user:User):Observable<User>{
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.resourceUrl,
          JSON.stringify(user),
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
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
