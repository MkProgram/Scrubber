import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  inputs: ["scbTicketHeadline", "scbTicketDescription"],
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public clicked: boolean;

  constructor() {
    this.clicked = false;
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

}
