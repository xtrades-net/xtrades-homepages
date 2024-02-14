import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineLearningComponent } from './machine-learning.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from '@shared/components/modal/modal.module';

@NgModule({
  declarations: [MachineLearningComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: MachineLearningComponent,
      },
    ]),
  ],
})
export class MachineLearningModule {}
