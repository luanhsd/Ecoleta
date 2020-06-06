import express from 'express';
const routes = express.Router();

//Controllers
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get(`/items`, itemsController.index);

routes.get(`/points`, pointsController.index);
routes.get(`/points/:id`, pointsController.show);
routes.post(`/points`, pointsController.store);

export default routes;
