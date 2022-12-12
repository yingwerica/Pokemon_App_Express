const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon');


//routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})







app.listen(port, () => {
    console.log(`listening to ${port}`)
})