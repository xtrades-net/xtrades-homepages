import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrowdfundingRaiseComponent } from './crowdfunding-raise.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [CrowdfundingRaiseComponent],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild([
      {
        path: '',
        component: CrowdfundingRaiseComponent,
      },
    ]),
  ],
})
export class CrowdfundingRaiseModule {}
