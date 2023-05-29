import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { DirectivesModule } from '@shared/directives/directives.module';
import { ModalModule } from '@shared/components/modal/modal.module';
import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from '@shared/components/header/header.module';
import { FooterModule } from '@shared/components/footer/footer.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    DirectivesModule,
    ModalModule,
    SharedModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [{ provide: Window, useValue: window }],
})
export class MainLayoutModule {}
