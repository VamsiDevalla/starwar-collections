import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwcCollectionResolver } from './swc-collection.resolver';
import { SwcCollectionComponent } from './swc-collection.component';
import { AuthGuard } from '../user/auth.guard';

// Routes for swc-collection module
const routes: Routes = [
  {
    path: '',
    component: SwcCollectionComponent,
    resolve: { resolvedFilms: SwcCollectionResolver },
    data: { path: 'all_collections' },
  },
  {
    path: 'myCollection',
    canActivate: [AuthGuard],
    component: SwcCollectionComponent,
    resolve: { resolvedFilms: SwcCollectionResolver },
    data: { path: 'my_collections' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwcCollectionRoutingModule {}
