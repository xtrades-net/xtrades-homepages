import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { XButtonModule } from '@shared/components/x-button/x-button.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { VideoModalComponent } from './video-modal/video-modal.component';

@NgModule({
  declarations: [ModalComponent, SubscribeModalComponent, VideoModalComponent],
  exports: [ModalComponent, SubscribeModalComponent, VideoModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    XButtonModule,
    HttpClientJsonpModule,
  ],
})
export class ModalModule {}
