import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {v4} from "uuid";
import PrioritiesProvider, {IPriority} from "../../injectables/priorities/priorities.service";

export interface ITicket {
  title: string;
  description: string;
  id: string;
  priority: string;
  user: string;
  private: boolean;
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
  public priority: IPriority;
  public visibility: string;
  public prioritiesService: PrioritiesProvider;

  constructor(prioritiesService: PrioritiesProvider) {
    this.prioritiesService = prioritiesService;
  }

  public scbOnDone = new EventEmitter<ITicket>(false);

  public ngOnInit() {
    this.name = "";
    this.description = "";
    this.id = v4();
    this.priority = this.prioritiesService.priorities.find(priority => priority.value === "MEDIUM");
    this.visibility = "public";
  }

  public addTicket(form: NgForm) {
    const ticket = {
      title: form.value["name"],
      description: form.value["description"],
      id: form.value["id"],
      priority: form.value["priority"].id,
      user: "00000000-0000-0000-0000-000000000000",
      private: form.value["visibility"] === "private"
    };
    console.log(ticket);
    this.scbOnDone.emit(ticket);
    this.ngOnInit();
  }

}
