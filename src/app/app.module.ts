import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { FormComponent } from './accommodation/form/form.component';
import { TableComponent } from './accommodation/table/table.component';
import { RouterModule, Routes } from '@angular/router';

import { AccommodationService } from "./accommodation/accommodation.service";

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: TableComponent },
  { path: 'novo', component: FormComponent },
  { path: 'edicao/:id', component: FormComponent },
  //{ path: '', component},
  
];
@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AccommodationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
