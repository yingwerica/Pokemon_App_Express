const express = require('express')
const app = express()
const port = 3000


//get route
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})









app.listen(port, () => {
    console.log(`listening to ${port}`)
})