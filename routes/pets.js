const router = require('express').Router()
const {
    getAllPets,
    createPets,
    deletePetsById,
    updatePetsById,
    getPetsById
   
} = require ('../controllers/Pets')


router.get('/', getAllPets)

router.get('/:id', getPetsById)

router.post('/', createPets)

router.put('/:id', updatePetsById)
 
router.delete('/:id', deletePetsById)

module.exports = router