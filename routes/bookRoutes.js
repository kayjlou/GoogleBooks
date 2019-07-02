

const { Book } = require('../models')
const axios = require('axios')

module.exports = app => {

  //Returns saved books in database
  app.get('/saved', (req, res) => {
    Book.find({ saved: true })
      .then(books => res.json(books))
      .catch(e => console.log(e))
  })


}