import { Injectable } from '@angular/core';
import { Accommodation } from "app/accommodation/accommodation";
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccommodationService {

  accommodations: Accommodation[] = [];
  resourceUrl = "https://senacnodebackend.herokuapp.com/accommodations";

  constructor(private http:Http) { }

  getAccommodations():Observable<Accommodation[]>{
    return this.http.get(this.resourceUrl)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }

  addAccommodation(accommodation: Accommodation):Observable<Accommodation>{
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.resourceUrl,
          JSON.stringify(accommodation),
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
  }

  deleteAccommodation(accommodation: Accommodation){
    this.http.delete(this.resourceUrl + '/' + accommodation._id).subscribe((res) => {

    });
  }

  updateAccommodation(id: string, accommodation: Accommodation):Observable<Accommodation>{
    let url = this.resourceUrl + '/' + id;
    let bodyString = JSON.stringify(accommodation);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.put(url,
          bodyString,
          options)
        .map((res:Response)=>{})
        .catch((erro:any)=>Observable.throw(erro));
  }

  getAccommodationById(id: string):Observable<Accommodation>{
    return this.http.get(this.resourceUrl +'/'+ id)
            .map((resp:Response)=>resp.json())
            .catch((erro:any)=>Observable.throw(erro));
  }
}
