const express = require('express')
const Route = express.Router()

const UserController = require('../controller/users')

Route
  .get('/', UserController.getAllBooks)
  .get('/filter', UserController.searchBooks)
  .post('/', UserController.addBook)
  .patch('/:idBook', UserController.updateBook)
  .delete('/:idBook', UserController.deleteBook)


module.exports = Route