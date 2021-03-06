import { NextFunction, Request, Response } from 'express';
import { AuthenticationError } from './authentication';

/**
 * handles login
 * @param request express request object
 * @param response express response object
 * @param next next express handler
 */
export const login = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  //getting username and password from the request body
  const { userId, password } = request.body;
  if (userId === 'bad') {
    next(response.status(401).send(new AuthenticationError(401, 'bad credentials')));
  } else {
    next(
      response.setHeader('token', password).status(200).json({
        name: userId,
      }),
    );
  }
};

/**
 * handles logout
 * @param request express request object
 * @param response express response object
 * @param next next express handler
 */
export const logout = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  //getting authorization token from request headers
  const { authorization } = request.headers;
  next(
    response.status(200).json({
      message: `successfully logged out the user ${authorization}`,
    }),
  );
};
