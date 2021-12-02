import AuthorizationController from './authorization/authorization.controller';
import { Application, Router } from 'express';

const _routes: [string, Router][] = [['/auth', AuthorizationController]];

const routes = (app: Application) => {
  for (const route of _routes) {
    const [url, controller] = route;
    app.use(url, controller);
  }
};

export default routes;
