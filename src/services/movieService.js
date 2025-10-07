import { create } from "express-handlebars";
import Movie from "../model/Movie.js";

export default {
    getAll(filter={}){
        //const resultObj = query.map(m => m.toObject());
        //const query = await Movie.find(filter).lean();
        let query = Movie.find(filter);
       
          if(filter.title){
            //Search by title, partial match, case insensitive
            //query = query.filter(m => m.title.toLowerCase().includes(filter.title.toLowerCase()));
            query = query.find({title: {$regex: filter.title, $options: 'i'} });
          }
    
          if(filter.genre){
            //Search by genre, exact match, case insensitive  
            //query = query.filter(m => m.genre.toLowerCase() == filter.genre.toLowerCase());
            query = query.find({genre: {$regex: new RegExp(`^${filter.genre}$`) , $options: 'i'} });
          }
    
          if(filter.year){
            //Search by year, exact match
            //query = query.filter(m => m.year == filter.year);
            query = query.where('year').equals(filter.year);
            //query = query.find({year: filter.year});

          }
    

        return query;    
    },

    getOne(movieId){
        //return Movie.findOne({_id: movieId});
        //return Movie.findById(movieId).populate('casts');
        return Movie.findById(movieId);

    },

    getOneDetailed(movieId){
      return this.getOne(movieId).populate('casts');
  },

    create(movieData, userId){
        //movieData.rating = Number(movieData.rating);
        // const movie = new Movie(movieData);
        // return movie.save();

        //MongoDb method
        return Movie.create({
          ...movieData, 
          rating: Number(movieData.rating), 
          creator: userId
        });
    },

    async attach(movieId, castId){
      // Add relation method 1
        // const movie = await Movie.findById(movieId);
        // movie.casts.push(castId);

        // return movie.save();
    // Add relation method 2
    return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
    
    }

};