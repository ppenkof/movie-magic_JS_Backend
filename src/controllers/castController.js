import { Router } from "express";

const castController = Router();

castController.get('/create', (req, res) => {
   
    res.render('casts/create', { pageTitle: 'Cast Page' });
});

export default castController;