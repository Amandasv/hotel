import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user";
import { UserService } from "app/user/user.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = "Cadastro de usuário";
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
    this.router.navigate(['/usuarios/lista']);
  }
  reset() {
    this.router.navigate(['/usuarios/lista']);
  }
}
