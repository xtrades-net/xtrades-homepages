import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { XButtonModule } from '../x-button/x-button.module';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MobileHeaderComponent],
  imports: [CommonModule, XButtonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
