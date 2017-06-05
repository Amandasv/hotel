import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { AccommodationFormComponent } from './accommodation/accommodation-form/accommodation-form.component';
import { AccommodationTableComponent } from './accommodation/accommodation-table/accommodation-table.component';
import { RouterModule, Routes } from '@angular/router';

import { AccommodationService } from "./accommodation/accommodation.service";
import { RoomComponent } from './room/room.component';
import { RoomService } from "./room/room.service";
import { RoomFormComponent } from "./room/room-form/room-form.component";
import { RoomTableComponent } from "./room/room-table/room-table.component";
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserService } from "app/user/user.service";

const routes: Routes = [
 // { path: '', redirectTo: 'quartos/lista', pathMatch: 'full' },
  { path: 'quartos/lista', component: RoomTableComponent },
  { path: 'quartos/novo', component: RoomFormComponent },
  { path: 'quartos/edicao/:id', component: RoomFormComponent },
  { path: 'acomodacoes/lista', component: AccommodationTableComponent },
  { path: 'acomodacoes/novo', component: AccommodationFormComponent },
  { path: 'acomodacoes/edicao/:id', component: AccommodationFormComponent },
  { path: 'usuarios/lista', component: UserTableComponent },
  { path: 'usuarios/novo', component: UserFormComponent },
  { path: 'usuarios/edicao/:id', component: UserFormComponent },
  { path: 'usuarios', component: UserComponent },
  { path: 'acomodacoes', component: AccommodationComponent },
  { path: 'quartos', component: RoomComponent },
  
  //{ path: '', component},
  
];
@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    AccommodationFormComponent,
    AccommodationTableComponent,
    RoomComponent,
    RoomFormComponent,
    RoomTableComponent,
    UserComponent,
    UserFormComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AccommodationService, RoomService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
