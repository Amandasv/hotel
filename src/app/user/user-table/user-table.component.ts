import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

 users: User[];
 error: string;

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.service.getUsers().subscribe(
      // usersX => this.funcao(usersX),
      usersX => this.users = usersX,
      error => this.error = error
    );
  }

  delete(user:User){
    this.service.deleteUser(user);
  }

  // funcao(users:User[]){
  //   this.users = users;
  //   console.log(users);
  // }

}
