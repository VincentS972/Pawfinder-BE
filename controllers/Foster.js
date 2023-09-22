const Foster = require('../models/foster')

async function getAllFosters(req, res) {
    try {
        const foster = await Foster.find()
        res.json(foster)
    } catch (error) {
        console.log('error fetching Fosters:', error)
        res.json({ 'message': 'error fetching foster' })
    }
}

async function getFosterById( req, res){
    try {
        const { id } = req.params
        const foster = await Foster.findById(id)
        res.json(foster)
    } catch (error) {
        console.log('error finding this foster')
        res.json({ 'message': 'error finding this foster'})   
    }
}
async function createFoster(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Foster(req.body).save()
    res.status(201).json({ 'message': 'Foster created' })
} catch (error) {
    console.log('error creating foster:', error)
    res.json({ 'message': 'error creating foster' })
}
}

async function updateFosterById( req,res ) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Foster.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'Foster updated'})
    } catch (error) {
        console.log('error updating foster:', error)
        res.json({ 'message': 'error updating foster'})
    }
}

async function deleteFosterById(req, res) {
    try {
        const { id } = req.params
        await Foster.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'Foster deleted' })
    } catch (error) {
        console.log('error deleting foster:', error)
        res.json({ 'message': 'error deleting foster' })
    }
}
module.exports = {
    getAllFosters,
    createFoster,
    deleteFosterById,
    updateFosterById,
    getFosterById
}