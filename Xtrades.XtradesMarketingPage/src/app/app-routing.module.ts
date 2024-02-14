import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pro-algo',
    loadChildren: () =>
      import('./pages/pro-algo/pro-algo.module').then((m) => m.ProAlgoModule),
  },
  {
    path: 'crowdfunding',
    loadChildren: () =>
      import('./pages/crowdfunding-raise/crowdfunding-raise.module').then(
        (m) => m.CrowdfundingRaiseModule
      ),
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
  {
    path: 'blogs',
    loadChildren: () =>
      import('./pages/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'militarydiscount',
    loadChildren: () =>
      import('./pages/discount/discount.module').then((m) => m.DiscountModule),
  },
  {
    path: 'ourtraders',
    loadChildren: () =>
      import('./pages/ourtraders/ourtraders.module').then(
        (m) => m.OurTradersModule
      ),
  },
  {
    path: 'elite-products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('./pages/confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
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
