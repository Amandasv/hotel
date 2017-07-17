import { Component, OnInit } from '@angular/core';
import { Accommodation } from "../accommodation";
import { AccommodationService } from "../accommodation.service";

@Component({
  selector: 'app-table',
  templateUrl: './accommodation-table.component.html',
  styleUrls: ['./accommodation-table.component.css']
})
export class AccommodationTableComponent implements OnInit {

  accommodations: Accommodation[];
  error: string;

  constructor(private service: AccommodationService) {

  }

  ngOnInit(): void {
    this.service.getAccommodations().subscribe(
      accommodations => this.accommodations = accommodations,
      error => this.error = error
    );
  }

  delete(accommodation:Accommodation){
    this.service.deleteAccommodation(accommodation);
  }

}
