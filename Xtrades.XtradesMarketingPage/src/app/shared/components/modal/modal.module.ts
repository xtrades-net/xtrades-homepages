import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { XButtonModule } from '@shared/components/x-button/x-button.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { ThankYouModalComponent } from './thank-you-modal/thank-you-modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    SubscribeModalComponent,
    ErrorModalComponent,
    VideoModalComponent,
    ThankYouModalComponent,
  ],
  exports: [
    ModalComponent,
    SubscribeModalComponent,
    ErrorModalComponent,
    VideoModalComponent,
    ThankYouModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    XButtonModule,
    HttpClientJsonpModule,
  ],
})
export class ModalModule {}
