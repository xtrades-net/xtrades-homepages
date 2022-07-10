import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    DirectivesModule,
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
