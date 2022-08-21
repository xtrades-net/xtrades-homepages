/* eslint-disable max-len */
import {
  Component, OnInit
} from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 500,
      offset: 40,
      once: true,
    });
  }
}
