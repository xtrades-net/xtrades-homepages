import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { XButtonModule } from '@shared/components/x-button/x-button.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { RoadmapModalComponent } from './roadmap-modal/roadmap-modal.component';

@NgModule({
  declarations: [ModalComponent, RoadmapModalComponent],
  exports: [ModalComponent, RoadmapModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    XButtonModule,
    HttpClientJsonpModule,
  ],
})
export class ModalModule {}
