import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {v4} from "uuid";

export interface ITicket {
  name: string;
  description: string;
  id: string;
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
  public id: string;

  constructor() {
  }

  public scbOnDone = new EventEmitter<ITicket>(false);

  ngOnInit() {
    this.name = "";
    this.description = "";
    this.id = v4();
  }

  addTicket(form: NgForm) {
    this.scbOnDone.emit({
      name: form.value["name"],
      description: form.value["description"],
      id: form.value["id"]
    });
    this.ngOnInit();
  }

}
