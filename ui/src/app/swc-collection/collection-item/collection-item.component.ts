import { Component, Input } from '@angular/core';
import { IFilm } from '../swc-collection';

@Component({
  selector: 'swc-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent{
  @Input() film!: IFilm;
}
