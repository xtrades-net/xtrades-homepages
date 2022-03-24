import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscordComponent } from './discord/discord.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { HeroModule } from '@shared/components/hero/hero.module';
import { XButtonModule } from '@shared/components/x-button/x-button.module';
import { FaqComponent } from './faq/faq.component';
import { AnalystGuidelinesComponent } from './analyst-guidelines/analyst-guidelines.component';
import { ServerGuideComponent } from './server-guide/server-guide.component';
import { ServerRulesComponent } from './server-rules/server-rules.component';
import { DirectivesModule } from '@shared/directives/directives.module';
import { CardModule } from '@shared/components/card/card.module';

@NgModule({
  declarations: [
    DiscordComponent,
    TabsComponent,
    TabComponent,
    FaqComponent,
    AnalystGuidelinesComponent,
    ServerGuideComponent,
    ServerRulesComponent,
  ],
  imports: [
    CommonModule,
    HeroModule,
    XButtonModule,
    CardModule,
    DirectivesModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiscordComponent,
        children: [
          {
            path: 'server-rules',
            component: ServerRulesComponent,
            data: { index: 1 },
          },
          {
            path: 'server-guidelines',
            component: ServerGuideComponent,
            data: { index: 2 },
          },
          { path: 'faq', component: FaqComponent, data: { index: 3 } },
          {
            path: 'analyst-guidelines',
            component: AnalystGuidelinesComponent,
            data: { index: 4 },
          },
        ],
      },
    ]),
  ],
})
export class DiscordModule {}
