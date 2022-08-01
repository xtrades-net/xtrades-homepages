import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from '@shared/components/modal/modal.module';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [DiscountComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiscountComponent,
      }
    ]),
    ModalModule,
    NgxFileDropModule
  ],
})
export class DiscountModule {}