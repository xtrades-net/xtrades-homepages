import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XButtonModule } from '../x-button/x-button.module';
import { FooterComponent } from './footer.component';
import { SeparatorModule } from '../separator/separator.module';
import { HeroModule } from '../hero/hero.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    XButtonModule,
    SeparatorModule,
    HeroModule,
    RouterModule,
    MatTooltipModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
