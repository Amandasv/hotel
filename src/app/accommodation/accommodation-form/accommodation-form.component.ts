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
  id: string;
  error: string;

  constructor(
    private service: AccommodationService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(typeof(this.id) == 'undefined'){
      this.accommodation = new Accommodation();
    }
    else {
      this.service.getAccommodationById(this.id).subscribe(
        accommodation => this.accommodation = accommodation,
        error => this.error = error
      );
    }
  }

  saveAccommodation(){
    if(typeof(this.id) == 'undefined'){
      this.service.addAccommodation(this.accommodation).subscribe(
        accommodation => this.router.navigate(['/acomodacoes/lista']),
        error => this.error = error
      )
    }
    else {
      this.service.updateAccommodation(this.id, this.accommodation).subscribe(
        data => this.router.navigate(['/acomodacoes/lista']),
        error => this.error = error
      );
    }
    this.router.navigate(['/acomodacoes/lista']);
  }
  reset() {
    this.router.navigate(['/acomodacoes/lista']);
  }
}
