import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowProvider } from '@core/window';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [ WindowProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
