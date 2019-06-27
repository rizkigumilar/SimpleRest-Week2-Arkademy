const book = require('../models/users')
const resultRespon = require('../helpers/helper')

exports.getAllBooks = (req, res) => {
  book.getAllBooks()
    .then((resultBook) => {
      resultRespon.response(res, resultBook, 200);
    })
    .catch((err) => {
      console.log(err);
    })
},


exports.getBookCat = (req, res) => {
    const category = req.params.idCat

    book.getBookCat(category)
      .then((resultUser) => {
        const result = resultUser[0]
        resultRespon.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  exports.getBookLoc = (req, res) => {
    const location = req.params.location

    book.getBookLoc(location)
      .then((resultUser) => {
        const result = resultUser[0]
        resultRespon.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  exports.addBook = (req, res) => {
    let newBook = new book(req.body);
    book.addBook(newBook)
      .then(() => {
        resultRespon.responPost(res, newBook, 200);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  exports.updateBook = (req, res) => {
    const book_id = req.params.idBook

    const updateBook = new book(req.body)

    book.updateBook(updateBook, book_id)
      .then((resultUser) => {
        const result = resultUser[0]
        resultRespon.responPost(res, updateBook, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  exports.deleteBook = (req, res) => {
    const book_id = req.params.idBook

    book.deleteBook(book_id)
      .then((resultUser) => {
        const result = resultUser[0]
        resultRespon.responDelete(res, book_id, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  }
