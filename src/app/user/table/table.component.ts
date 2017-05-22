import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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