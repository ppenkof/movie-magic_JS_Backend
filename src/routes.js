import castController from './controllers/castController.js';
import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import authController from './controllers/authController.js';
import { Router } from 'express';

const routes = Router(); 

routes.use(homeController);
routes.use('/movies', movieController);
routes.use('/casts', castController);
routes.use('/auth', authController);

//Add not found page 404
routes.get('/*splat', (req, res) => {
    res.render('404');
});

export default routes;