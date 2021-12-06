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
    return this.collectionService.getCollections().pipe(
      map(films => ({ films })),
      catchError(error => of({ error: <SwcCollectionError>error })),
    );
  }
}
