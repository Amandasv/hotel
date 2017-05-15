import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RoomComponent } from './room/room.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { FormComponent } from './user/form/form.component';
import { TableComponent } from './user/table/table.component';
import { UserService } from "app/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoomComponent,
    AccommodationComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
