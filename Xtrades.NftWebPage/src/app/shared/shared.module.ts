import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { SeparatorModule } from './components/separator/separator.module';
import { FooterModule } from './components/footer/footer.module';
import { FormsModule } from '@angular/forms';
import { XButtonModule } from './components/x-button/x-button.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    SeparatorModule,
    XButtonModule,
    FooterModule,
  ],
  exports: [
    CommonModule,
    HeaderModule,
    SeparatorModule,
    XButtonModule,
    FooterModule
  ],
})
export class SharedModule { }
