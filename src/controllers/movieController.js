import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";

const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
    res.render('movies/create', { categories: getMovieCategoryViewData()});
});

movieController.post('/create', isAuth, async (req, res) => {
    const movieData = req.body;
    const userId = req.user.id;

    try {
        await movieService.create(movieData, userId);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('movies/create', { 
            error: errorMessage, 
            movie: movieData, 
            categories: getMovieCategoryViewData(movieData.category) 
        });
    }
    
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    try{
        const movie = await movieService.getOneDetailed(movieId);
        
        //prepare view data - temp solution
        const ratinigViewData = '&#x2605'.repeat(Math.trunc(movie.rating));

        //const isCreator = req.user?.id && movie.creator == req.user.id;
        const isCreator = movie.creator && movie.creator.equals(req.user?.id);

        res.render('movies/details', { movie, ratinig: ratinigViewData, isCreator}); 
    }
    catch(error){
        // 31 Redirect without message (not recommended)
        //res.redirect('/404');   
        // #2 Render error page(url not modified)
        res.render('404', { error: 'Movie not found!' });
        // #3 Redirect with message url changed

    }
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    console.log(req.query);

    res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

movieController.get('/:movieId/attach', async (req, res) => {

    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll({excludes: movie.casts});

    res.render(`casts/attach`, { movie, casts });
});

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
});

movieController.get('/:movieId/delete', isAuth, async (req, res) => {

    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    if (!movie.creator?.equals(req.user.id)) {
        return res.redirect('/');
    }

    await movieService.delete(movieId);

    res.redirect('/');
});

movieController.get('/:movieId/edit', isAuth, async (req, res) => {

    const movieId = req.params.movieId;
    try {
        const movie = await movieService.getOne(movieId);
        const categoriesViewData = getMovieCategoryViewData(movie.category);

        res.render('movies/edit', { movie, categories: categoriesViewData });
    } catch (error) {
        res.render('404', { error: 'Movie not found!' });
    }
    
});

movieController.post('/:movieId/edit', isAuth, async (req, res) => {

    const movieId = req.params.movieId;
    const movieData = req.body;
    try {
        await movieService.edit(movieId, movieData);    
        res.redirect(`/movies/${movieId}/details`);
    } catch (error) {
        res.status(400).render('movies/edit', { 
            movie: movieData,
            error: getErrorMessage(error),
            categories: getMovieCategoryViewData(movieData.category)
        });
    }
      
});

function getMovieCategoryViewData(selectedCategory){
    const categories = [    
    { value: 'tv-show', label: 'TV Show' },
    { value: 'animation', label: 'Animation' },
    { value: 'movie', label: 'Movie' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'short-film', label: 'Short Film' },];

    const viewData = categories.map(category => ({ ...category, selected: selectedCategory === category.value ? 'selected' : '' }))

    return viewData;
}

export default movieController;