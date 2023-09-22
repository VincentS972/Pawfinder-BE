const router = require('express').Router()
const {
    getAllFosters,
    createFoster,
    deleteFosterById,
    updateFosterById,
    getFosterById
   
} = require ('../controllers/Foster')


router.get('/', getAllFosters)

router.get('/:id', getFosterById)

router.post('/', createFoster)

router.put('/:id', updateFosterById)
 
router.delete('/:id', deleteFosterById)

module.exports = router