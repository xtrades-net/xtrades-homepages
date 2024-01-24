import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoLayoutComponent } from './promo-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PromoLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../../pages/crowdfunding-raise/crowdfunding-raise.module'
          ).then((m) => m.CrowdfundingRaiseModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoLayoutRoutingModule {}
