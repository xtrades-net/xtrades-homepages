import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [AppComponent, BannerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-MZJJNMV',
    }),
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
