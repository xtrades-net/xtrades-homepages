import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '@core/modal.service';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'homepage';
  openModalTimeout: any;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 500,
      offset: 40,
      once: true,
    });

    this.openModalTimeout = setTimeout(() => {
      this.openModal('subscribe-modal');
    }, 2000);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  ngOnDestroy(): void {
    clearTimeout(this.openModalTimeout);
  }
}
