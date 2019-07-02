module.exports = app => {

  //Require in route js files here
  require('./apiRoutes.js')(app)
  require('./bookRoutes')(app)
}