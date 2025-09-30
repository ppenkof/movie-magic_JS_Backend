import { Router } from "express";

const castController = Router();

castController.get('/create', (req, res) => {
   
    res.render('casts/create', { pageTitle: 'Cast Page' });
});

castController.post('/create', async (req, res) => {
    const castData = req.body;
    const result = await castService.create(castData);
    res.redirect('/');
});

export default castController;