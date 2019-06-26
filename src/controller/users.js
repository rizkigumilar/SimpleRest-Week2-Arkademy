const userModels = require('../models/users')
const MiscHelper = require('../helpers/helper')

module.exports = {
  getIndex: (req, res) => {
    return res.json({ message: 'Hello' })
  },

  // Using Callback
  getAllBooks: (req, res) => {
    userModels.getAllBooks((err, result) => {
      if (err) console.log(err)

      // res.json(result)
      MiscHelper.response(res, result, 200)
    })
  },

  // Using Promise
  getBookCat: (req, res) => {
    const category = req.params.idCat

    userModels.getBookCat(category)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBookLoc: (req, res) => {
    const location = req.params.location

    userModels.getBookLoc(location)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  addBook: (req, res) => {
    const data = {
      name: req.body.name,
      writer: req.body.writer,
      location: req.body.location,
      idCat: req.body.idCat
    }

    userModels.addBook(data)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  updateBook: (req, res) => {
    const book_id = req.params.idBook

    const data = {
      name: req.body.name,
      writer: req.body.writer,
      location: req.body.location,
      idCat: req.body.idCat
    }

    userModels.updateBook(data, book_id)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200 )
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteBook: (req, res) => {
    const book_id = req.params.idBook

    userModels.deleteBook(book_id)
      .then((resultUser) => {
        const result = resultUser[0]
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
