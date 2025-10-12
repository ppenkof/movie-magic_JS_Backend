import movieService from '../services/movieService.js';

export async function isMovieCreator(req,res,next){
    const movieId = req.params.movieId;

    if(!req.isAuthenticated){
        return res.redirect('/auth/login'); // To do message 
    }

    const movie = await movieService.getOne(movieId);
    if (!movie.creator.equals(req.user.id)) {
        return res.status(401).render('404', { error: 'Only creator can edit this movie!' });
    }

    req.movie = movie;
    next();
}