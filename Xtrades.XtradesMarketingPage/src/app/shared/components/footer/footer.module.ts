import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XButtonModule } from '../x-button/x-button.module';
import { FooterComponent } from './footer.component';
import { SeparatorModule } from '../separator/separator.module';
import { HeroModule } from '../hero/hero.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    XButtonModule,
    SeparatorModule,
    HeroModule,
    RouterModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
