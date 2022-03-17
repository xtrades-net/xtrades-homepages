import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from '@shared/components/hero/hero.module';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacypolicy/privacypolicy.component';
import { FooterModule } from '@shared/components/footer/footer.module';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    HeroModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivacyPolicyComponent,
      },
    ]),
  ],
})
export class PrivacyPolicyModule { }
