const express = require('express')
const Route = express.Router()

const UserController = require('../controller/users')

Route
  .get('/', UserController.getAllBooks)
  .get('/category/:idCat', UserController.getBookCat)
  .get('/location/:location', UserController.getBookLoc)
  .post('/', UserController.addBook)
  .patch('/:idBook', UserController.updateBook)
  .delete('/:idBook', UserController.deleteBook)
  

module.exports = Route