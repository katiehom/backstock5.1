const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)
router.get('/add', ensureAuth, todosController.add)
router.get('/edit/:id', ensureAuth, todosController.edit)
router.put('/:id', ensureAuth, todosController.update)
router.post('/createTodo', todosController.createTodo)
router.delete('/deleteTodo/:id', todosController.deleteTodo)

module.exports = router