import { Injectable } from '@angular/core';
import { Accommodation } from "app/accommodation/accommodation";

@Injectable()
export class AccommodationService {

  accommodations: Accommodation[] = [{
    id: 1,
    room:'102',
    category:'básico',
    observation: 'observação'
  }];

  autoIncremet:number = 1;

  constructor() { }

  getAccommodations(){
    console.log('accommodations: ', this.accommodations);
    return this.accommodations;
  }

  addAccommodation(accommodation: Accommodation){
    accommodation.id = this.autoIncremet++;
    this.accommodations.push(accommodation);
  }

  deleteAccommodation(accommodation: Accommodation){
    let index = this.accommodations.indexOf(accommodation, 0);
    if (index > -1) {
      this.accommodations.splice(index, 1);
    }
  }

  updateAccommodation(id: number, accommodation: Accommodation){
    let index = this.accommodations.indexOf(this.getAccommodationById(id), 0);
    this.accommodations[index] = accommodation;
  }

  getAccommodationById(id: number){
    return this.accommodations.find(accommodation => accommodation.id == id);
  }

}