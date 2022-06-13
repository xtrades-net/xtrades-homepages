import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/components/modal/modal.service';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'homepage';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 500,
      offset: 40,
      once: true,
    });
  }

  openErrorModal() {
    this.modalService.open('error-modal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
