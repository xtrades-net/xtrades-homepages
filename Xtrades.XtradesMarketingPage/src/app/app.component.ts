import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'homepage';

  constructor() {}

  ngOnInit() {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 500,
      offset: 40,
      once: true,
    });
  }
}
