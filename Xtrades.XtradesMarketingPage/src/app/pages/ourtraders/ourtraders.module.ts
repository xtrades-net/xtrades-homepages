import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTradersComponent } from './ourtraders/ourtraders.component';
import { RouterModule } from '@angular/router';

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
  ],
})
export class OurTradersModule {}
