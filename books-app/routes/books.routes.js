const express = require('express');
const router = express.Router();

const Book = require('../models/book.model')




router.get('/', (req, res) => {
  Book.find()
    .then(allTheBooks => res.render('books/booksList', { books: allTheBooks }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

router.get('/details/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(theBook => res.render('books/bookDetails', { book: theBook }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});












module.exports = router;