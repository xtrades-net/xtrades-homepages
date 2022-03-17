import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDropdownComponent } from './menu-dropdown.component';
import { MenuDropdownElementComponent } from './menu-dropdown-element/menu-dropdown-element.component';
import { DropdownDirective } from './menu-dropdown.directive';
import { XButtonModule } from '../x-button/x-button.module';

@NgModule({
  declarations: [
    MenuDropdownComponent,
    MenuDropdownElementComponent,
    DropdownDirective,
  ],
  imports: [CommonModule, XButtonModule],
  exports: [
    MenuDropdownComponent,
    MenuDropdownElementComponent,
    DropdownDirective,
  ],
})
export class MenuDropdownModule {}
