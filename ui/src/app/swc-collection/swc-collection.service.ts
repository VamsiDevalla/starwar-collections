import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { LoggerService } from '../core/logger.service';
import { IFilm, SwcCollectionError } from './swc-collection';

@Injectable({
  providedIn: 'root',
})
export class SwcCollectionService {
  readonly basePath = '/api/starwar-collections';
  constructor(private http: HttpClient, private logger: LoggerService) {}

  getCollections(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.basePath).pipe(
      tap(movies => this.logger.log('Successfully received movies collection', movies)),
      catchError(this.handleError),
    );
  }

  getMyStarWarsCollection(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.basePath + '/getMyStarWarsCollection').pipe(
      tap(movies => this.logger.log('Successfully received movies collection for the user', movies)),
      catchError(this.handleError),
    );
  }

  private handleError = (error: HttpErrorResponse) => {
    const collectionServiceError = new SwcCollectionError(
      error?.status || 0,
      error?.error.message || error?.statusText || 'unknown error',
      error,
    );
    this.logger.error('Collection Service Error', collectionServiceError);
    return throwError(() => collectionServiceError);
  }
}
