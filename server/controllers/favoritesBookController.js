const {FavoritesBookList} = require('../models/models')

class FavoritesBookController {
    async create(req, res) {
        const {count, userId, bookId} = req.body
        const favoritesBook= await FavoritesBookList.create({count, userId, bookId})
        return res.json(favoritesBook)
    }

    async getOne(req, res) {
        const {id} = req.params
        const favoritesBook = await FavoritesBookList.findOne(
            {
                where: {id}
            }
        )
        return res.json(favoritesBook)
    }
}

module.exports = new FavoritesBookController()