import { Injectable } from '@angular/core';
import { Room } from "./room";
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomService {
  rooms: Room[] = [];
  resourceUrl = "https://senacnodebackend.herokuapp.com/rooms";

constructor(private http:Http) { }

  getRooms():Observable<Room[]>{
    return this.http.get(this.resourceUrl)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }

  addRoom(room: Room):Observable<Room>{
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.resourceUrl,
          JSON.stringify(room),
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
  }

  deleteRoom(room: Room){
    this.http.delete(this.resourceUrl + '/' + room._id).subscribe((res) => {

    });
  }

  updateRoom(id: string, room: Room):Observable<Room>{
    let url = this.resourceUrl + '/' + id;
    let bodyString = JSON.stringify(room);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.put(url,
          bodyString,
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
  }

  getRoomById(id: string):Observable<Room>{
    return this.http.get(this.resourceUrl +'/'+ id)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }

}
