import { Router } from 'express';
import { login } from './authorization.handler';

// new express router to handle authorization routes
const AuthorizationController: Router = Router();

//post handler for login path
AuthorizationController.post('/login', login);

export default AuthorizationController;
