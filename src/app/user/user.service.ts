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
    this.http.delete(this.resourceUrl + '/' + user._id).subscribe((res) => {
      console.log(res)
    });
  }

  updateUser(id: string, user: User):Observable<User>{
    let url = this.resourceUrl + '/' + id;
    let bodyString = JSON.stringify(user);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.put(url,
          bodyString,
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
  }


  getUserById(id: string):Observable<User>{
    return this.http.get(this.resourceUrl +'/'+ id)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }

}
