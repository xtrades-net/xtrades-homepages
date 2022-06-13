import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '@shared/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from '@shared/components/footer/footer.module';
import { DirectivesModule } from '@shared/directives/directives.module';
import { ModalModule } from '@shared/components/modal/modal.module';
import { ContingencyAlertHackedComponent } from '@shared/components/contingency-alert-hacked/contingency-alert-hacked.component';
import { BannerComponent } from '@shared/components/banner/banner.component';

@NgModule({
  declarations: [AppComponent, ContingencyAlertHackedComponent, BannerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    DirectivesModule,
    ModalModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
