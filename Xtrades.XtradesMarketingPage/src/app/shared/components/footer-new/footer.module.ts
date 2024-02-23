import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [FooterComponent],
})
export class FooterModule {}
