import { Component, AfterViewChecked } from '@angular/core';
import { ITicket } from './components/addTicket/addTicket.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  tickets: Array<ITicket> = [];

  removeTicket(uuid:string) {
    const ticketIndex = this.tickets.findIndex((ticket)=>ticket.id===uuid);
    this.tickets.splice(ticketIndex, 1);
  }
}
