const express = require('express');
const router = express.Router();


/*-----------------------
----- QUERY STRINGS -----
-----------------------*/


// http://localhost:3000/shop/search?item=tshirt&color=red&price=low&size=M
router.get('/search', (req, res) => {
    console.log('El objeto almacenado en req.query (query estrings) es el siguiente:')
    console.log(req.query)
    res.render('shop/results', req.query)
})



module.exports = router;