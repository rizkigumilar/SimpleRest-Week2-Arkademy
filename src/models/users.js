const connection = require('../config/connect')

module.exports = {
  getAllBooks: (callback) => {
    connection.query(`SELECT * FROM books INNER JOIN category ON books.idCat=category.idCat`, (err, result) => {
      if (err) console.log(err)

      callback(err, result)
    })
  },

  getBookCat: (category) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM books INNER JOIN category ON books.idCat=category.idCat`, category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getBookLoc: (location) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM books INNER JOIN category ON books.idCat=category.idCat WHERE location = ?`, location, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  addBook: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO books SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateBook: (data, book_id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE books SET ? WHERE idBook = ?', [data, book_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteBook: (book_id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM books WHERE idBook = ?', book_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}
