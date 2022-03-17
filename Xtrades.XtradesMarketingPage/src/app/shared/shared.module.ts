import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from './components/hero/hero.module';
import { CardModule } from './components/card/card.module';
import { HeaderModule } from './components/header/header.module';
import { MenuDropdownModule } from './components/menu-dropdown/menu-dropdown.module';
import { SeparatorModule } from './components/separator/separator.module';
import { XButtonModule } from './components/x-button/x-button.module';
import { IconCardModule } from './components/icon-card/icon-card.module';
import { SliderModule } from './components/slider/slider.module';
import { LabelComponent } from './components/label/label.component';
import { TextSliderModule } from './components/text-slider/text-slider.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,
    CardModule,
    HeaderModule,
    HeroModule,
    MenuDropdownModule,
    SeparatorModule,
    XButtonModule,
    IconCardModule,
    SliderModule,
    TextSliderModule,
    FooterModule,
  ],
  exports: [
    CommonModule,
    CardModule,
    HeaderModule,
    HeroModule,
    MenuDropdownModule,
    SeparatorModule,
    XButtonModule,
    IconCardModule,
    SliderModule,
    LabelComponent,
    TextSliderModule,
    FooterModule,
  ],
})
export class SharedModule {}
