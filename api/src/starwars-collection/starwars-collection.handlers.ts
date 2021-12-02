import { NextFunction, Request, Response } from 'express';

/**
 * gives a list of star war collection items of the user with give id.
 * @param request express request object
 * @param response express response object
 * @param next next express handler
 */
export const getCollections = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  //getting user id token from request headers
  const { id } = request.params;
  console.log(id);
  next(response.status(200).json(['item1', 'item2']));
};
