import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { IFilmsResolved, SwcCollectionError } from './swc-collection';
import { SwcCollectionService } from './swc-collection.service';

@Injectable({
  providedIn: 'root',
})
export class SwcCollectionResolver implements Resolve<IFilmsResolved> {
  constructor(private collectionService: SwcCollectionService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFilmsResolved> {
    let filmResolver$ = this.collectionService.getCollections()
    if (state.url === '/collection/myCollection') {
       filmResolver$ =  this.collectionService.getMyStarWarsCollection()
    }
    return filmResolver$.pipe(
      map(films => ({ films })),
      catchError(error => of({ error: <SwcCollectionError>error })),
    );
  }
}
