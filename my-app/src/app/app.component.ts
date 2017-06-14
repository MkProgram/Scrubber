import { Component } from '@angular/core';
import { ITicket } from './components/addTicket/addTicket.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tickets:Array<ITicket> = [];
}
