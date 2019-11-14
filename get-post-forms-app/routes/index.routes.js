const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('index'))

// Formulario GET
router.get('/search', (req, res) => res.render('searchForm'))
router.get('/results', (req, res) => {
  console.log('El req.query de esta página es:', req.query)
  res.render('flightResults', req.query)
})


// Formulario POST
router.get('/login', (req, res) => res.render('loginForm'))
router.post('/login', (req, res) => {
  // Los datos enviados por post se encuentran en req.body
  console.log('Gracias a Body Parser podemos acceder a req.body, donde se amlacenan los datos enviados por POST:', req.body)
  res.send(req.body)
})

module.exports = router