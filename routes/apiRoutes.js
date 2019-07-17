require("dotenv").config();
const axios = require('axios')
const db = require('../models')
const path = require('path')
const { apiKey } = require('../keys.js')

module.exports = app => {

  //Retrieve based on search input
  app.get('/api/books', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=harrypotter&country=US&key=${apiKey}`)
      .then(res => console.log(res)
      )
      .catch(e => console.log(e))
  })






}