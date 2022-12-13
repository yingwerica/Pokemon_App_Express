require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon');
const mongoose = require('mongoose')

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: false}))  //access req.body object

//connect to database
mongoose.set('strictQuery', true); //remove deprication warnings
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



///////routes//////////////////////////////
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

//index
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon})
})

//new
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//create
app.post('/pokemon', (req, res) => {
    pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})


//show
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {singlePokemon: pokemon[req.params.id]}) 
})





app.listen(port, () => {
    console.log(`listening to ${port}`)
})