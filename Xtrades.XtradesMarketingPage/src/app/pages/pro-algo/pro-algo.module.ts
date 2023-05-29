import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProAlgoComponent } from './pro-algo.component';
import { FooterModule } from '@shared/components/footer-new/footer.module';
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
    FooterModule,
    SwiperModule,
  ],
})
export class ProAlgoModule {}
