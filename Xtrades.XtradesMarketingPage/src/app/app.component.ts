import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare global {
  interface Window {
    Intercom: any;
  }
}

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
    window.Intercom('boot', {
      app_id: "kz9zp2wu",
      email: '',
      user_id: 'Xtrades Homepage User',
      created_at: new Date(),
    });
  }
}
