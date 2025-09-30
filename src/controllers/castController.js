import { Router } from "express";

const castController = Router();

castController.get('/', (req, res) => {
    res.end();
    //res.render('cast', { pageTitle: 'Cast Page' });
});

export default castController;