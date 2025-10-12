import { Router } from "express";
import castService from "../services/castService.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";   

const castController = Router();

castController.get('/create', (req, res) => {
   
    res.render('casts/create', { pageTitle: 'Cast Page' });
});

castController.post('/create', async (req, res) => {
    const castData = req.body;

    try {
        const result = await castService.create(castData);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('casts/create', { 
            cast: castData, 
            error: getErrorMessage(error) });
    }
    
});

export default castController;