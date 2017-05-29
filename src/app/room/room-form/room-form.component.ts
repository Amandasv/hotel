import { Component, OnInit } from '@angular/core';
import { RoomService } from "../room.service";
import { Room } from "../room";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  title = "Cadastro de acomodação";
  room: Room;
  id: number;

  constructor(
    private service: RoomService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(isNaN(this.id)){
      this.room = new Room();
    }
    else {
      this.room = Object.assign({},
        this.service.getRoomById(this.id)
      );
    }
    
  }

  saveRoom(){
    if(isNaN(this.id)){
      this.service.addRoom(this.room);
      this.room = new Room();
    }
    else {
      this.service.updateRoom(this.id, this.room);
    }
    this.router.navigate(['/quartos/lista']);
  }
  reset() {
    this.router.navigate(['/quartos/lista']);
  }
}
