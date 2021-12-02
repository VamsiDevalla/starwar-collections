import AuthorizationController from './authorization/authorization.controller';
import { Application, Router } from 'express';

const _routes: [string, Router][] = [['/auth', AuthorizationController]];

/**
 * adds all controller middleware for all paths to the given application.
 * @param app express application
 */
const routes = (app: Application) => {
  for (const route of _routes) {
    const [url, controller] = route;
    //adding a controller
    app.use(url, controller);
  }
};

export default routes;
