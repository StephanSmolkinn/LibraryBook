const Router = require('express')
const router = new Router()
const favoritesBookController = require('../controllers/favoritesBookController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', favoritesBookController.create)
router.get('/:id', favoritesBookController.getOne)

module.exports = router