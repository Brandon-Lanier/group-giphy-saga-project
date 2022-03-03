const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();

const router = express.Router();

  router.get('/:q', (req, res) => {
    const searchTxt = req.params.q
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTxt}`)
    .then(response => res.send(response.data))
    .catch(error => {
        res.sendStatus(500)
    })
})

module.exports = router;