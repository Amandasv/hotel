import { Component, OnInit } from '@angular/core';
import { AccommodationService } from "../accommodation.service";
import { Accommodation } from "../accommodation";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.css']
})
export class AccommodationFormComponent implements OnInit {
  title = "Cadastro de acomodação";
  accommodation: Accommodation;
  id: number;

  constructor(
    private service: AccommodationService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(isNaN(this.id)){
      this.accommodation = new Accommodation();
    }
    else {
      this.accommodation = Object.assign({},
        this.service.getAccommodationById(this.id)
      );
    }
    
  }

  saveAccommodation(){
    if(isNaN(this.id)){
      this.service.addAccommodation(this.accommodation);
      this.accommodation = new Accommodation();
    }
    else {
      this.service.updateAccommodation(this.id, this.accommodation);
    }
    this.router.navigate(['acomodacoes/lista']);
  }
  reset() {
    this.router.navigate(['acomodacoes/lista']);
  }
}
