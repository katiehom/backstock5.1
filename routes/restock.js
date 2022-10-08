const express = require('express')
const router = express.Router()
const restockController = require('../controllers/restock') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, restockController.getRestock)
router.get('/addRestock', ensureAuth, restockController.addRestock)
router.get('/editRestock/:id', ensureAuth, restockController.editRestock)
router.put('/:id', ensureAuth, restockController.updateRestock)
router.put('/increaseRestock/:id', ensureAuth, restockController.increaseRestock)
router.put('/incrRestock/:id', ensureAuth, restockController.incrRestock)
router.put('/decreaseRestock/:id', ensureAuth, restockController.decreaseRestock)
router.put('/decrRestock/:id', ensureAuth, restockController.decrRestock)
router.post('/createRestock', restockController.createRestock)
router.post('/exportRestock', restockController.exportRestock)
router.delete('/deleteRestock/:id', restockController.deleteRestock)

module.exports = router