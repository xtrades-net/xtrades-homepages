import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { OurNumbersComponent } from './our-numbers/our-numbers.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NftGoalsComponent } from './nft-goals/nft-goals.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TrustedAppsComponent } from './trusted-apps/trusted-apps.component';
import { MainHeroComponent } from './main-hero/main-hero.component';
import { ImageSeperatorComponent } from './image-seperator/image-seperator.component';
import { ModalModule } from '@shared/components/modal/modal.module';

@NgModule({
  declarations: [
    HomeComponent, 
    NumberCardComponent,
    OurNumbersComponent,
    RoadmapComponent,
    NftGoalsComponent,
    OurTeamComponent,
    AvatarComponent,
    TrustedAppsComponent,
    MainHeroComponent,
    ImageSeperatorComponent
  ],
  imports: [
    SharedModule,
    DirectivesModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    [],
  ],
})
export class HomeModule {}
