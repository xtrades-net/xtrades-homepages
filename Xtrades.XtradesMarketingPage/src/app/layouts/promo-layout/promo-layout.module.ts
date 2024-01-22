import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoLayoutRoutingModule } from './promo-layout-routing.module';
import { PromoLayoutComponent } from './promo-layout.component';

@NgModule({
  declarations: [PromoLayoutComponent],
  imports: [CommonModule, PromoLayoutRoutingModule],
})
export class PromoLayoutModule {}
