require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose')
const methodOverride = require('method-override')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//connect to database
mongoose.set('strictQuery', true); //remove deprication warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended: false}))  //access req.body object
app.use(methodOverride('_method')) //use methodOverride to enable form send DELETE/PUT request


///////routes (REST implementation)//////////////////////////////
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

//index
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemons:allPokemon})
    } 
   )
})

//new
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})


//create
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})


//show
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPoke) => {
        res.render('Show', {pokemon: foundPoke})
    })
}) 

//edit
//update
//delete
//DELETE request send from the delete form in index page
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, foundPoke) => {
        res.redirect('/pokemon')
    })
})




app.listen(port, () => {
    console.log(`listening to ${port}`)
})