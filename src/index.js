import express from 'express';
import handbars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/authMiddleware.js';
import pageHelpers from './helpers/pageHelpers.js';
import session from 'express-session';  
import { tempDataMiddleware } from './middlewares/tempDataMiddleware.js';


const app = express();

// Setup Database
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

try {
    await mongoose.connect(url, {dbName: 'movie-magic'})
    console.log('MongoDB connected');
}
catch(err) {
    console.log('Cannot connect to DB, ', err.message);
}

// Setup Handlebars as the view engine
app.engine('hbs', handbars.engine({
    extname: '.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers:{
        ...pageHelpers,
    } 
}));


app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup middlewares
app.use(express.static('src/public'));
app.use(express.urlencoded({extended: true})); //parse form data from POST requests

//Cookie Parser
app.use(cookieParser());

//Auth Middleware   
app.use(authMiddleware);

//Express Sesison
app.use(session({
    secret: 'JHiausjhdikasjhd3u7ia78dh73uida3789h7d3a78o3hd783d78a3h87a3h7d8ha38diauhd7i3uhd3',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

//Add tempData middleware
app.use(tempDataMiddleware);

//Routes
app.use(routes);

//Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));    
