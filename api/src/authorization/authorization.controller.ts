import { Router } from 'express';
import { login, logout } from './authorization.handlers';

// new express router to handle authorization routes
const AuthorizationController: Router = Router();

//post handler for login path
AuthorizationController.post('/login', login);
//delete handler for logout path
AuthorizationController.delete('/logout', logout);

export default AuthorizationController;
