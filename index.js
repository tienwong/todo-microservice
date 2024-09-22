require('dotenv').config()
require('./config/database')

const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from GET / !')
})

app.listen(PORT, () => {
    console.log('App is listening on port 3000')
})