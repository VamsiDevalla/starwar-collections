import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwcCollectionComponent } from './swc-collection.component';
import { SwcCollectionRoutingModule } from './swc-collection-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SwcCollectionComponent],
  imports: [SharedModule, SwcCollectionRoutingModule],
})
export class SwcCollectionModule {}
