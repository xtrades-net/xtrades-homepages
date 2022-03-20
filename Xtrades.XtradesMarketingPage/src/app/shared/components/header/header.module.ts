import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderElementComponent } from './header-element/header-element.component';
import { XButtonModule } from '../x-button/x-button.module';
import { HeaderElementListComponent } from './header-element-list/header-element-list.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderElementComponent,
    HeaderElementListComponent,
    MobileHeaderComponent,
  ],
  imports: [CommonModule, XButtonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
