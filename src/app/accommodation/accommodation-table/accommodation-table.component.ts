import { Component, OnInit } from '@angular/core';
import { Accommodation } from "../accommodation";
import { AccommodationService } from "../accommodation.service";

@Component({
  selector: 'app-table',
  templateUrl: './accommodation-table.component.html',
  styleUrls: ['./accommodation-table.component.css']
})
export class AccommodationTableComponent implements OnInit {

 accommodations: Accommodation[] = [];

  constructor(private service: AccommodationService) {
  
  }

  ngOnInit(): void {
    this.accommodations = this.service.getAccommodations();
  }

  delete(accommodation:Accommodation){
    this.service.deleteAccommodation(accommodation);
  }

}