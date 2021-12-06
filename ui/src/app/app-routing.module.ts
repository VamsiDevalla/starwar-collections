import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: 'collection',
    loadChildren: () => import('./swc-collection/swc-collection.module').then(m => m.SwcCollectionModule),
  },
  {
    path: 'login',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
