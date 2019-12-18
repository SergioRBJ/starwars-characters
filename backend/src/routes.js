import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import AvatarController from './app/controllers/AvatarController';
import FilmController from './app/controllers/FilmController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) =>
  res.json({ message: 'Welcome to StarWars Characters API' })
);

// Add avatar image to the character
routes.post('/avatar/:id/:ent/', upload.single('file'), AvatarController.store);

// Get all films
routes.get('/films/', FilmController.index);

export default routes;
