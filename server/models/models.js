const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const BookInfo = sequelize.define('book_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const FavoritesBookList = sequelize.define('favorites_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, allowNull: false}
})

const GenreAuthor = sequelize.define('genre_author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(FavoritesBookList)
FavoritesBookList.belongsTo(User)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Author.hasMany(Book)
Book.belongsTo(Author)

Book.hasMany(BookInfo, {as: 'info'});
BookInfo.belongsTo(Book)

Book.hasMany(FavoritesBookList)
FavoritesBookList.belongsTo(Book)

Genre.belongsToMany(Author, {through: GenreAuthor })
Author.belongsToMany(Genre, {through: GenreAuthor })

module.exports = {
    User,
    Book,
    Genre,
    Author,
    GenreAuthor,
    BookInfo,
    FavoritesBookList
}