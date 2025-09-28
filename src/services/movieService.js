import { create } from "express-handlebars";
import Movie from "../model/Movie-old.js";

export default {
    getAll(filter){
        return Movie.find(filter);    
    },

    getOne(movieId){
        return Movie.findOne({_id: movieId});
    },

    create(movieData){
        movieData.rating = Number(movieData.rating);
        const movie = new Movie(movieData);
        return movie.save();
    }
};