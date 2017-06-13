import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navClicked(ev){
    const oElm = ev.currentTarget;
    $('li.active').removeClass('active');
    $(oElm).addClass('active');
  }
}
