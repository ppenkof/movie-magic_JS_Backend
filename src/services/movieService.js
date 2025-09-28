import { create } from "express-handlebars";
import Movie from "../model/Movie.js";

export default {
    async getAll(filter){
        //const resultObj = result.map(m => m.toObject());
        //const result = await Movie.find(filter).lean();
        const result = await Movie.find(filter);
        return result;    
    },

    getOne(movieId){
        return Movie.findOne({_id: movieId});
    },

    create(movieData){
        movieData.rating = Number(movieData.rating);
        // const movie = new Movie(movieData);
        // return movie.save();
        
        //MongoDb method
        return Movie.create(movieData);
    }
};