import { NextFunction, Request, Response } from 'express';

export const login = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const { username, password } = request.body;
  next(
    response.status(200).json({
      message: `success authenticated the user ${username} using the password ${password}`,
    }),
  );
};
