import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

export interface ITicket {
  name: string;
  description: string;
}

@Component({
  selector: 'scbAddTicket',
  templateUrl: './addTicket.component.html',
  styleUrls: ['./addTicket.component.css'],
  outputs: ["scbOnDone"]
})
export default class AddTicketComponent implements OnInit {

  public name: string;
  public description: string;

  constructor() {
    this.name = "";
    this.description = "";
  }

  public scbOnDone = new EventEmitter<ITicket>(false);

  ngOnInit() {
  }

  addTicket(form: NgForm) {
    this.scbOnDone.emit({
      name: form.value["name"],
      description: form.value["description"]
    });
  }

}
