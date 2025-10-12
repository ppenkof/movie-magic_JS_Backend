import express from 'express';
import handbars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/authMiddleware.js';
import pageHelpers from './helpers/pageHelpers.js';


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

//Routes
app.use(routes);

//Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));    
