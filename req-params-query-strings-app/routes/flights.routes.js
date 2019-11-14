const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('flights/flightsIndex'))


/*----------------------
----- ROUTE PARAMS -----
----------------------*/

// http://localhost:3000/flights/search/from/bilbao/
router.get('/search/from/:departureCity/to/:destinationCity/', (req, res) => {
    const params = req.params               // Los route params se almacenan en req.params del objeto request
    console.log(params)
    res.render('flights/searchFlights', params)
})



// http://localhost:3000/flights/details/KLM65378
router.get('/details/:flightID/', (req, res) => {
    const params = req.params
    console.log('El ID del vuelo a buscar es: ' + params.flightID)
    res.render('flights/flightDetails', params)
})





module.exports = router;