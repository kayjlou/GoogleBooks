const express = require('express')
const { join, resolve } = require('path')
const app = express()


app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/booksdb', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))


//Next write out schemas(blue print) for the article it will be under models