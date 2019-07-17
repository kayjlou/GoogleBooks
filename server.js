const express = require('express')
const { join, resolve } = require('path')
const app = express()


app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/booksdb'

require('./routes')(app)

require('mongoose').connect(MONGODB_URI || { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))


//Next write out schemas(blue print) for the article it will be under models