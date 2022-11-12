import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTradersComponent } from './ourtraders/ourtraders.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [OurTradersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OurTradersComponent,
      },
    ]),
    SharedModule,
  ],
})
export class OurTradersModule {}
