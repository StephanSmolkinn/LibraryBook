const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const userRouter = require('./userRouter')
const authorRouter = require('./authorRouter')
const genreRouter = require('./genreRouter')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/author', authorRouter)
router.use('/device', bookRouter)

module.exports = router