import express from 'express';
import handbars from 'express-handlebars';


const app = express();

// Setup Handlebars as the view engine
app.engine('hbs', handbars.engine({extname: '.hbs'}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup middlewares
app.use(express.static('src/public'));

//Routes
app.get('/', (req, res) => {
    res.render('home',{layout: false});
});

//Start Server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));    
