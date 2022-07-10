import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { RouterModule } from '@angular/router';
import { SeparatorModule } from '../separator/separator.module';
import { XButtonModule } from '../x-button/x-button.module';

@NgModule({
  declarations: [HeaderComponent, MobileHeaderComponent],
  imports: [CommonModule, XButtonModule, RouterModule, SeparatorModule],
  exports: [HeaderComponent, MobileHeaderComponent],
})
export class HeaderModule {}
