import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { XButtonModule } from '../x-button/x-button.module';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { RouterModule } from '@angular/router';
import { PopoverModule } from '../popover/popover.module';
import { OurTradersModule } from 'src/app/pages/ourtraders/ourtraders.module';
import { ProductsModule } from 'src/app/pages/products/products.module';
import { AccordionModule } from '../accordion/accordion.module';

@NgModule({
  declarations: [HeaderComponent, MobileHeaderComponent],
  imports: [
    CommonModule,
    XButtonModule,
    RouterModule,
    PopoverModule,
    OurTradersModule,
    AccordionModule,
    ProductsModule
  ],
  exports: [HeaderComponent, MobileHeaderComponent],
})
export class HeaderModule {}
