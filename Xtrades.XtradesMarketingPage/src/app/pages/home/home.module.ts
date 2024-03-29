import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { MainImageAnimationComponent } from './main-image-animation/main-image-animation.component';
import { VideoHeroModule } from '@shared/components/video-hero/video-hero.module';
import { FooterModule } from '@shared/components/footer/footer.module';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    MainImageAnimationComponent,
    HomepageContentComponent,
  ],
  imports: [
    SharedModule,
    VideoHeroModule,
    DirectivesModule,
    FormsModule,
    FooterModule,
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
