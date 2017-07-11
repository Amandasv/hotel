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
  id: string;
  error: string;

  constructor(
    private service: UserService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(typeof(this.id) == 'undefined'){
      this.user = new User();
    }
    else {
      this.service.getUserById(this.id).subscribe(
        user => this.user = user,
        error => this.error = error
      );
    }

  }

  saveUser(){
    if(typeof(this.id) == 'undefined'){
      this.service.addUser(this.user).subscribe(
        user => this.router.navigate(['/usuarios/lista']),
        error => this.error = error
      )
    }
    else {
      this.service.updateUser(this.id, this.user).subscribe(
        data => this.router.navigate(['/usuarios/lista']),
        error => this.error = error
      );
    }
    this.router.navigate(['/usuarios/lista']);
  }
  reset() {
    this.router.navigate(['/usuarios/lista']);
  }
}
