require("dotenv").config();
const axios = require('axios')
const db = require('../models')
const path = require('path')

module.exports = app => {

  //Retrieve based on search input
  app.get('/api/books', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?`)
      .then(res =>
        res.json()
      )
      .catch(e => console.log(e))
  })






}