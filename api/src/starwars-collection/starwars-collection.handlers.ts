import { NextFunction, Request, Response } from 'express';
import { movies } from './mock-starwars-movie-collection';
import { StarWarsError } from './starwars-collection';

const userCollections: Map<string, number[]> = new Map([
  ['josh', [3, 4, 6]],
  ['Justin', [1, 2, 3, 4, 5, 6]],
]);
/**
 * gives a list of star war collection items of the user with give id.
 * @param request express request object
 * @param response express response object
 * @param next next express handler
 */
export const getCollections = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  //getting user id token from request headers
  const userId = request.headers['sw-user-id'] || '';
  if (userId) {
    if (userCollections.has(<string>userId)) {
      const films = userCollections
        .get(<string>userId)
        ?.map(movieId => movies.find(film => film.episode_id === movieId));
      next(response.status(200).json(films));
    } else {
      next(response.status(404).json(new StarWarsError(2, 'userId not found')));
    }
  } else {
    next(response.status(400).json(new StarWarsError(1, 'userId header missing')));
  }
};
