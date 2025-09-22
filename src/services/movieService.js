import Movie from "../model/Movie.js";

export default {
    getAll(){
        return Movie.find();    
    }
};