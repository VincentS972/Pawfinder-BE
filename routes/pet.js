const router = require('express').Router()
const {
    getAllPets,
    createPet,
    deletePetById,
    updatePetById,
    getPetById
   
} = require ('../controllers/Pet')


router.get('/', getAllPets)

router.get('/:id', getPetById)

router.post('/', createPet)

router.put('/:id', updatePetById)
 
router.delete('/:id', deletePetById)

module.exports = router