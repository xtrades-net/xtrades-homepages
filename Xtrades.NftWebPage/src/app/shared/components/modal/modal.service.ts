import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string, data?: any) {
    const modal = this.modals.find((x) => x.id === id);

    if (data) {
      modal.open(data);
    } else {
      modal.open();
    }
  }

  close(id: string) {
    console.log('close');
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}
