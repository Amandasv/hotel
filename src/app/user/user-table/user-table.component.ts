import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

 users: User[] = [];

  constructor(private service: UserService) {

  }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  delete(user:User){
    this.service.deleteUser(user);
  }
}
