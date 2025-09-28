import { create } from "express-handlebars";
import Movie from "../model/Movie.js";

export default {
    async getAll(filter){
        const result = await Movie.find(filter).lean();
        return result;    
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