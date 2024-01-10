import { Component } from '@angular/core';
import { ModalService } from '@shared/components/modal/modal.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  withEmail = false;
  constructor(private modalService: ModalService) {}

  openErrorModal() {
    this.modalService.open('error-modal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
