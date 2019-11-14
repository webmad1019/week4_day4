const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.render('books/booksIndex'))
router.get('/list', (req, res, next) => res.render('books/booksList'))
router.get('/create', (req, res, next) => res.render('books/createBook'))
router.get('/detail', (req, res, next) => res.render('books/bookDetail'))

module.exports = router;