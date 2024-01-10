import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProAlgoComponent } from './pro-algo.component';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProAlgoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProAlgoComponent,
      },
    ]),
    SharedModule,
    SwiperModule,
  ],
})
export class ProAlgoModule {}
