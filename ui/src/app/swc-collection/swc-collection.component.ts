import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilm, IFilmsResolved } from './swc-collection';

@Component({
  selector: 'swc-swc-collection',
  templateUrl: './swc-collection.component.html',
  styleUrls: ['./swc-collection.component.scss'],
})
export class SwcCollectionComponent implements OnInit {
  pageTitle = 'Your Collection';
  films: IFilm[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.onFilmResolve(this.route.snapshot.data['resolvedFilms'], this.route.snapshot.data?.['path']);
  }

  /**
   *sets current collects and page title according to the resolved data obj
   * @param responseObj Resolved starwars collection data obj
   * @param path current path
   */
  onFilmResolve(responseObj: IFilmsResolved, path: string) {
    if (responseObj.error) {
      this.pageTitle = path === 'my_collections' ? 'No Collections Found' : 'No Items Found';
    } else {
      this.pageTitle = path === 'my_collections' ? 'Your Collection' : 'All Items';
      this.films = responseObj.films || [];
    }
  }
}
