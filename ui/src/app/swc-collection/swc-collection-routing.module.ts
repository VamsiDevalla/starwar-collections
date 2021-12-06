import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwcCollectionResolver } from './swc-collection.resolver';
import { SwcCollectionComponent } from './swc-collection.component';

const routes: Routes = [
  { path: '', component: SwcCollectionComponent, resolve: { resolvedFilms: SwcCollectionResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwcCollectionRoutingModule {}
