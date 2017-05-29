import { Component, OnInit } from '@angular/core';
import { Accommodation } from "../accommodation";
import { AccommodationService } from "../accommodation.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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