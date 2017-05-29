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

const routes: Routes = [
  { path: '', redirectTo: 'quartos/lista', pathMatch: 'full' },
  { path: 'quartos/lista', component: RoomTableComponent },
  { path: 'quarto/novo', component: RoomFormComponent },
  { path: 'quarto/edicao/:id', component: RoomFormComponent },
  { path: 'acomodacoes/lista', component: AccommodationTableComponent },
  { path: 'acomodacao/novo', component: AccommodationFormComponent },
  { path: 'acomodacao/edicao/:id', component: AccommodationFormComponent },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AccommodationService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
