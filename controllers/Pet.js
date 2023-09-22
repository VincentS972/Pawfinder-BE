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