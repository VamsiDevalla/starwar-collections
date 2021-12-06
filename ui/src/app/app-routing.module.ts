import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: 'collection',
    canActivate: [AuthGuard],
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
    redirectTo: 'collection',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
