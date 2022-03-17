import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IconCardModule } from '../icon-card/icon-card.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, IconCardModule],
  exports: [CardComponent],
})
export class CardModule {}
