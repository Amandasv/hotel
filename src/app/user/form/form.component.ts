import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../user";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = "Cadastro de usuários";
  user: User;
  id: number;

  constructor(
    private service: UserService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(isNaN(this.id)){
      this.user = new User();
    }
    else {
      this.user = Object.assign({},
        this.service.getUserById(this.id)
      );
    }
    
  }

  saveUser(){
    if(isNaN(this.id)){
      this.service.addUser(this.user);
      this.user = new User();
    }
    else {
      this.service.updateUser(this.id, this.user);
    }
    this.router.navigate(['/lista']);
  }
  reset() {
    this.router.navigate(['/lista']);
  }
}
