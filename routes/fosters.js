const router = require('express').Router()
const {
    getAllFosters,
    createFosters,
    deleteFostersById,
    updateFostersById,
    getFostersById
   
} = require ('../controllers/Fosters')


router.get('/', getAllFosters)

router.get('/:id', getFostersById)

router.post('/', createFosters)

router.put('/:id', updateFostersById)
 
router.delete('/:id', deleteFostersById)

module.exports = router