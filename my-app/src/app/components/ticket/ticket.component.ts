import { Component, OnInit, NgModule, trigger, transition, style, animate, state, EventEmitter } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  inputs: ["scbTicketHeadline", "scbTicketDescription"],
  outputs: ['scbOnRemove'],
  styleUrls: ['./ticket.component.css'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(5%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateY(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateY(5%)', opacity: 0})

      )]
    )
  ])]
})

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ]
})

export class TicketComponent implements OnInit {

  public clicked: boolean;
  public scbTicketHeadline: string;
  public scbTicketDescription: string;
  public displayDescription: string;
  public scbOnRemove = new EventEmitter();

  constructor() {
    this.clicked = false;
    this.scbTicketHeadline = this.scbTicketHeadline || "Ich bin ein Titel";
    this.scbTicketDescription = this.scbTicketDescription || "Ich bin eine Beschreibung";
  }

  ngOnInit() {
  }

  unfold() {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }

  remove() {
    this.scbOnRemove.emit();
  }
}
