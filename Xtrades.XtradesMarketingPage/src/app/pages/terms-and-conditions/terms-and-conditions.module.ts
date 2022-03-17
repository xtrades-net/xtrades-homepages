import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FooterModule } from '@shared/components/footer/footer.module';
import { HeroModule } from '@shared/components/hero/hero.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [
    CommonModule,
    HeroModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: TermsAndConditionsComponent,
      },
    ]),
  ],
})
export class TermsAndConditionsModule {}
