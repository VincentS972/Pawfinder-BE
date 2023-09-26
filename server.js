
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const petRoutes = require('./controllers/pet')
const fosterRoutes = require('./routes/foster')

//add routes here
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use('/pets', petRoutes)
app.use('/foster', fosterRoutes)

// db connection and seed data
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, console.log(`listening on port ${PORT}`))