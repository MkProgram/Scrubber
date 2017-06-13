import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import AddTicketComponent from "./components/addTicket/addTicket.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
