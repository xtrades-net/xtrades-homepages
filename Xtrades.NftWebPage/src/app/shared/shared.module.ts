import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { SeparatorModule } from './components/separator/separator.module';
import { FooterModule } from './components/footer/footer.module';
import { XButtonModule } from './components/x-button/x-button.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SeparatorModule,
    XButtonModule,
    FooterModule,
    DirectivesModule,
  ],
  exports: [
    CommonModule,
    HeaderModule,
    SeparatorModule,
    DirectivesModule,
    XButtonModule,
    FooterModule
  ],
})
export class SharedModule { }
