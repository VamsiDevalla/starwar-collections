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
    /**
     * resolves starwars collection data required for all collections and current user collection
     */
    // Resolves all collection items by default
    let filmResolver$ = this.collectionService.getCollections()
    // Resolves current user collection when the path is myCollection
    if (state.url === '/collection/myCollection') {
       filmResolver$ =  this.collectionService.getMyStarWarsCollection()
    }
    return filmResolver$.pipe(
      map(films => ({ films })),
      catchError(error => of({ error: <SwcCollectionError>error })),
    );
  }
}
