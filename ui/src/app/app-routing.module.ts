import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { SelectiveStrategyService } from './selective-strategy.service';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: 'collection',
    data: { preload: true },
    loadChildren: () => import('./swc-collection/swc-collection.module').then(m => m.SwcCollectionModule),
  },
  {
    path: 'login',
    data: { preload: true },
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RouteNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategyService })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
