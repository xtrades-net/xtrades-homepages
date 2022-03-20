import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'refund-policy',
    loadChildren: () =>
      import('./pages/refundpolicy/refundpolicy.module').then(
        (m) => m.RefundPolicyModule
      ),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./pages/privacypolicy/privacypolicy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () =>
      import('./pages/terms-and-conditions/terms-and-conditions.module').then(
        (m) => m.TermsAndConditionsModule
      ),
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./pages/membership/membership.module').then(
        (m) => m.MembershipModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
