import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntercomService } from '@core/services/intercom.service';
import { ModalService } from '@shared/components/modal/modal.service';
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
export class AppComponent implements OnInit, OnDestroy {
  title = 'homepage';

  constructor(
    private intercomService: IntercomService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 500,
      offset: 40,
      once: true,
    });

    this.intercomService.init();

    setTimeout(() => {
      this.intercomService.show();
    }, 30000);
  }

  openErrorModal() {
    this.modalService.open('error-modal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  ngOnDestroy(): void {
    this.intercomService.shutdown();
  }
}
