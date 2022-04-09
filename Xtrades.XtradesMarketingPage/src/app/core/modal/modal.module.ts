import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { XButtonModule } from '@shared/components/x-button/x-button.module';

@NgModule({
  declarations: [ModalComponent, SubscribeModalComponent],
  exports: [ModalComponent, SubscribeModalComponent],
  imports: [CommonModule, RouterModule, FormsModule, XButtonModule],
})
export class ModalModule {}
