import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.user = new User(); 
  }

  onSubmit(){
    this.service.addUser(this.user);
    this.user = new User();

  }
}
