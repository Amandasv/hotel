import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";

@Component({
  selector: 'app-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit {

 rooms: Room[] = [];

  constructor(private service: RoomService) {

  }

  ngOnInit(): void {
    this.rooms = this.service.getRooms();
  }

  delete(room:Room){
    this.service.deleteRoom(room);
  }

}
