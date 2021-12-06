import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectiveStrategyService implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    // preloading a module only if preload property is defined with a truthy value in router configuration
    if (route.data?.['preload']) {
      return load();
    }
    return of(null);
  }
}
