const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const petRoutes = require('./routes/pet')
const fosterRoutes = require('./routes/foster')
const Pets = require("./models/pet")

//add routes here
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

app.listen(PORT, console.log(`listening on port ${PORT}`))

const petSeedData = [
    {
        petName: "Whiskers",
        fosterName: "Shawn",
        petGender: "Female",
        petType: "Cat",
        petAge: "2 Years",
        petBio: "Whiskers is an orange independent Domestic Shorthair, who will capture your heart with her graceful charm and soothing purrs."
    },
    {
        petName: "Luna",
        fosterName: "Ilana",
        petGender: "Female",
        petType: "Dog",
        petAge: "3 Years",
        petBio: "Luna is a spirited, intelligent Border Collie mix with a heart full of love and a zest for life."
    },
    {
        petName: "Midnight",
        fosterName: "Ashton",
        petGender: "Female",
        petType: "Cat",
        petAge: "9 Months",
        petBio: "Midnight, a sleek and mysterious black cat, is a an enchanting companion who brings a touch of magic to every moment."
    },
    {
        petName: "Max",
        fosterName: "Jackson",
        petGender: "Male",
        petType: "Dog",
        petAge: "5 Years",
        petBio: "Max is a lovable Labrador Retriever, a wagging tail of happiness who's always up for an adventure and ready to be your faithful companion."
    },
    {
        petName: "Mochi",
        fosterName: "Allison",
        petGender: "Male",
        petType: "Cat",
        petAge: "1 Year",
        petBio: "Mochi, the beautiful calico cat with a patchwork of colors, is a charming and affectionate feline companion who will fill your life with love and colorful moments."
    }
];

const seedDB = async () => {
  await Pets.deleteMany({});
  await Pets.insertMany(petSeedData);
};

seedDB().then(() => {
  mongoose.connection.close();
})

module.exports = app;