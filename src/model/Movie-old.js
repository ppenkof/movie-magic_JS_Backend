import {v4 as uuid} from 'uuid';
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', {encoding: 'utf-8'})
let db = JSON.parse(dbSerialized);  

export default class Movie{

  constructor(data){
    Object.assign(this, data);
    this._id = uuid();
  }

    static find(filter={}){
      let result = db.movies.slice();
      if(filter._id){
        result= db.movies.find(m => m._id == filter._id);
       }

      if(filter.title){
        //Search by title, partial match, case insensitive
        result = result.filter(m => m.title.toLowerCase().includes(filter.title.toLowerCase()));
      }

      if(filter.genre){
        //Search by genre, exact match, case insensitive  
        result = result.filter(m => m.genre.toLowerCase() == filter.genre.toLowerCase());
      }

      if(filter.year){
        //Search by year, exact match
        result = result.filter(m => m.year == filter.year);
      }

        return result;
    }

    static findOne(filter={}){
     let result = db.movies[0];
     if(filter._id){
      result= db.movies.find(m => m._id == filter._id);
     }
     return result;
    }

    get id(){
      return this._id.toString();   
    }

    async save(){
      db.movies.push(this);
      await fs.writeFile('./src/db.json', JSON.stringify(db, null, 2));
      return this;
    }
}