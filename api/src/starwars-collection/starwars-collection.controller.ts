import { Router } from 'express';
import { getCollections } from './starwars-collection.handlers';

//new express router to handle starwars routes
const StarwarsCollectionController: Router = Router();

//get handler to fetch all collection items for the given user
StarwarsCollectionController.get('', getCollections);

export default StarwarsCollectionController;
