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
    this.onFilmResolve(this.route.snapshot.data['resolvedFilms']);
  }

  onFilmResolve(responseObj: IFilmsResolved) {
    if (responseObj.error) {
      this.pageTitle = 'No Collections Found';
    } else {
      this.films = responseObj.films || [];
    }
  }
}
