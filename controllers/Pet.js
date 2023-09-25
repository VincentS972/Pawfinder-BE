const Pet = require('../models/pet')

async function getAllPets(req, res) {
    try {
        const pet = await Pet.find()
        res.json(pet)
    } catch (error) {
        console.log('error fetching pets:', error)
        res.json({ 'message': 'error fetching pets' })
    }
}

async function getPetById( req, res){
    try {
        const { id } = req.params
        const pet = await Pet.findById(id)
        res.json(pet)
    } catch (error) {
        console.log('error finding this pet')
        res.json({ 'message': 'error finding this pet'})   
    }
}
async function createPet(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Pet(req.body).save()
    res.status(201).json({ 'message': 'Pet created' })
} catch (error) {
    console.log('error creating pet:', error)
    res.json({ 'message': 'error creating pet' })
}
}

async function updatePetById( req,res ) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Pet.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'Pet updated'})
    } catch (error) {
        console.log('error updating pet:', error)
        res.json({ 'message': 'error updating pet'})
    }
}

async function deletePetById(req, res) {
    try {
        const { id } = req.params
        await Pet.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'Pet deleted' })
    } catch (error) {
        console.log('error deleting pet:', error)
        res.json({ 'message': 'error deleting pet' })
    }
}
module.exports = {
    getAllPets,
    createPet,
    deletePetById,
    updatePetById,
    getPetById
}

// const router = require("express").Router();
// const Pet = require("../models/pet");

// // routes

// router.get('/', async function (req, res) {
//   try {
//     const pet = await Pet.find();
//     res.json(pet);
//   } catch (error) {
//     console.log("error fetching pet:", error);
//     res.json({ message: "error fetching pet" });
//   }
// });

// router.get('/:id', async function (req, res) {
//   try {
//     const { id } = req.params;
//     const pet = await Pet.findById(id);
//     res.json(pet);
//   } catch (error) {
//     console.log("error fetching pet by id:", error);
//     res.json({ message: "error fetching pet" });
//   }
// });

// router.post('/', async function (req, res) {
//   try {
//     await new Pet(req.body).save();
//     res.status(201).json({ message: "pet created" });
//   } catch (error) {
//     console.log("error creating pet:", error);
//     res.json({ message: "error creating pet" });
//   }
// });

// router.put('/:id', async function (req, res) {
//   console.log(req.body);
//   try {
//     const { id } = req.params;
//     await Pet.findByIdAndUpdate(id, req.body);
//     res.status(204).json({ message: "pet updated" });
//   } catch (error) {
//     console.log("error updating pet:", error);
//     res.json({ message: "error updating pet" });
//   }
// });

// router.delete('/:id', async function (req, res) {
//   try {
//     const { id } = req.params;
//     await Pet.findByIdAndDelete(id);
//     res.status(204).json({ message: "pet deleted" });
//   } catch (error) {
//     console.log("error deleting pet:", error);
//     res.json({ message: "error deleting pet" });
//   } 
// });

// router.get('/data/seed', async function (req, res) {
//     const petSeedData = [
//         {
//             petName: "Whiskers",
//             fosterName: "Shawn",
//             petGender: "Female",
//             petType: "Cat",
//             petAge: "2 Years",
//             petBio: "Whiskers is an orange independent Domestic Shorthair, who will capture your heart with her graceful charm and soothing purrs."
//         },
//         {
//             petName: "Luna",
//             fosterName: "Ilana",
//             petGender: "Female",
//             petType: "Dog",
//             petAge: "3 Years",
//             petBio: "Luna is a spirited, intelligent Border Collie mix with a heart full of love and a zest for life."
//         }
//     ];
//     await Pet.insertMany(petSeedData);
//     res.status(303).redirect('/pet');
// });

// module.exports = router;