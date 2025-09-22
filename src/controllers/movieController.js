import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);
   
    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    //prepare view data - temp solution
    const ratinigViewData = '&#x2605'.repeat(Math.trunc(movie.rating));

    res.render('details', { movie, ratinig: ratinigViewData });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    console.log(req.query);

    res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

export default movieController;