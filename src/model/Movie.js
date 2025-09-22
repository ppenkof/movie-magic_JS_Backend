import {v4 as uuid} from 'uuid';

const movies = [
      {
        _id: "a3682672-0ee4-1284-8759-35ee253329zv",
        title: "Jungle Cuise",
       genre: "Adventure",
       decription: "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
       imagerl: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
       director: "Jaume Collet-Serra",
        year: "2021",
       ratng: 6.6,
       category: "movie"
      },
      {
        _id: "z2682672-0ee4-1534-8759-35ee253329ty",
        title: "Man of Steel",
        genre: "Superhero",
        descrption: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
        mageUrl:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg",
        diretor: "Zack Snyder",
        year: "2013",
        rating: 7.1,
        category:"movie"
      },
      {
        _id: "81313c94-08e0-40bf-85bc-1e7cdeebbef9",
        title: "Avengers: Endgame",
        category: "movie",
        genre: "Superhero",
        director: "Anthony Russo",
        year: "2019",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        rating: 8.4,
        description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe."
      },
      {
        _id: "8555329f-0735-4956-9176-7ffb388c2443",
        title: "The Case for Christ",
        category: "movie",
        genre: "Biography",
        director: " Jon Gunn",
        year: "2017",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcy-Q6F8E2JDeZzgHYaOWqMfbZeZzgUQS8A&s",
        rating: 6.4,
        description: "An investigative journalist and self-proclaimed atheist sets out to disprove the existence of God after his wife becomes a Christian.",
      }
    ];

export default class Movie{

  constructor(data){
    Object.assign(this, data);
    this._id = uuid();
  }

    static find(filter={}){
      let result = movies.slice();
      if(filter._id){
        result= movies.find(m => m._id == filter._id);
       }

      if(filter.title){
        //todo search by title, partial match, case insensitive
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
     let result = movies[0];
     if(filter._id){
      result= movies.find(m => m._id == filter._id);
     }
     return result;
    }

    get id(){
      return this._id;  
    }

    save(){
      movies.push(this);
      
      return this;
    }
}