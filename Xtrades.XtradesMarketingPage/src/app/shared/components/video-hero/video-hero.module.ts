import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHeroComponent } from './video-hero.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [VideoHeroComponent],
  exports: [VideoHeroComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
})
export class VideoHeroModule {}
