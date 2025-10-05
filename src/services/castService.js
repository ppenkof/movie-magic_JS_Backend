import { create } from "express-handlebars"
import Cast from "../model/Cast.js"

export default {
    getAll(filter={}){
        let query = Cast.find();
        
        if(filter.includes){
           //query = query.in('_id', filter.includes); // Mongoose $in operator
            query = query.find({'_id': {$in: filter.includes}}) // MongoDB $in operator
        }

        if(filter.excludes){
            query = query.nin('_id', filter.excludes); // Mongoose $nin operator
        }
        return query;
    },
    create(castData) {
        return Cast.create(castData);
    }
}