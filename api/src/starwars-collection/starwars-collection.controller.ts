import { Router } from 'express';
import { getCollections, getMyCollections } from './starwars-collection.handlers';

//new express router to handle starwars routes
const StarwarsCollectionController: Router = Router();
//get handler to fetch all items
StarwarsCollectionController.get('', getCollections);

//get handler to fetch all collection items for the given user
StarwarsCollectionController.get('/getMyStarWarsCollection', getMyCollections);

export default StarwarsCollectionController;
