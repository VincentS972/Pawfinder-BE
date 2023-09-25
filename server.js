const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const petRoutes = require('./routes/pet')
const fosterRoutes = require('./routes/foster')
const Pets = require("./models/pet")
//add routs here
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use('/pet', petRoutes)
app.use('/foster', fosterRoutes)

// db connection and seed data
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, console.log(`listining on port ${PORT}`))

const seedData = [
  {
    petName: "Whiskers",
    fosterName: "Shawn",
    getsUpdates: true
  }
];

const seedDB = async () => {
  await Pets.deleteMany({});
  await Pets.insertMany(seedData);
};

seedDB().then(() => {
  mongoose.connection.close();
})

module.exports = app;