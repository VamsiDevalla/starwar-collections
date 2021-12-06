import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'swc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nextRouteLoading = false;
  constructor(private router: Router) {
    router.events.subscribe({
      next: (routerEvent: Event) => this.setNextRouteLoading(routerEvent),
    });
  }

  setNextRouteLoading(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.nextRouteLoading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.nextRouteLoading = false;
    }
  }
}
