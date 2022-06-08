import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MembershipCardComponent } from './membership-card/membership-card.component';
import { MembershipComponent } from './membership/membership.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MembershipComponent, MembershipCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MembershipComponent,
      },
    ]),
  ],
})
export class MembershipModule {}
