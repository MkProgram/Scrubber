import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {v4} from "uuid";

export interface ITicket {
  title: string;
  description: string;
  id: string;
  priority: number;
  user: string;
}

export const TicketPriorities = [{
  value: 0,
  displayValue: "Niedrig"
}, {
  value: 1,
  displayValue: "Mittel"
}, {
  value: 2,
  displayValue: "Hoch",
}, {
  value: 3,
  displayValue: "Dringend"
}];

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
  public priority: number;
  public priorities = TicketPriorities;

  constructor() {
  }

  public scbOnDone = new EventEmitter<ITicket>(false);

  ngOnInit() {
    this.name = "";
    this.description = "";
    this.id = v4();
    this.priority = TicketPriority.MEDIUM;
  }

  addTicket(form: NgForm) {
    this.scbOnDone.emit({
      title: form.value["name"],
      description: form.value["description"],
      id: form.value["id"],
      priority: form.value["priority"],
      user: "00000000-0000-0000-0000-000000000000"
    });
    this.ngOnInit();
  }

}
