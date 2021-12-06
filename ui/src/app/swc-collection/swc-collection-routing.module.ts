import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwcCollectionComponent } from './swc-collection.component';

const routes: Routes = [{ path: '', component: SwcCollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwcCollectionRoutingModule {}
