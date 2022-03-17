import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { MainImageAnimationComponent } from './main-image-animation/main-image-animation.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [HomeComponent, MainImageAnimationComponent],
  imports: [
    SharedModule,
    DirectivesModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    [LottieModule.forRoot({ player: playerFactory })],
  ],
})
export class HomeModule {}
