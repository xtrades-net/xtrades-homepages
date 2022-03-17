import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundPolicyComponent } from './refundpolicy/refundpolicy.component';
import { HeroModule } from '@shared/components/hero/hero.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from '@shared/components/footer/footer.module';

@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [
    CommonModule,
    HeroModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: RefundPolicyComponent,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: '' },
    ]),
  ],
})
export class RefundPolicyModule {}
