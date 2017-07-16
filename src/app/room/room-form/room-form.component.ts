import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  title = "Cadastro de acomodação";
  room: Room;
  id: string;
  error: string;

  constructor(
    private service: RoomService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if(typeof(this.id) == 'undefined'){
      this.room = new Room();
    }
    else {
      this.service.getRoomById(this.id).subscribe(
        room => this.room = room,
        error => this.error = error
      );
    }

  }

  saveRoom(){
    if(typeof(this.id) == 'undefined'){
      this.service.addRoom(this.room).subscribe(
        room => this.router.navigate(['/quartos/lista']),
        error => this.error = error
      )
    }
    else {
      this.service.updateRoom(this.id, this.room).subscribe(
        data => this.router.navigate(['/quartos/lista']),
        error => this.error = error
      );
    }
    this.router.navigate(['/quartos/lista']);
  }
  reset() {
    this.router.navigate(['/quartos/lista']);
  }
}
