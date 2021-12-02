import { Router } from 'express';
import { login, logout } from './authorization.handler';

// new express router to handle authorization routes
const AuthorizationController: Router = Router();

//post handler for login path
AuthorizationController.post('/login', login);
AuthorizationController.delete('/logout', logout);

export default AuthorizationController;
