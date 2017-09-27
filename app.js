/* adding the express package into a node project */
var express = require('express');
/* working with a static files, stored into the file system. */
var path = require('path');
/* using the Express */
var app = express();
/* parse parameter from query parser */
var bodyParser = require('body-parser');
/* adding a routes folder inside the app */
var routes = require('./api/routes');

app.set('port',3000);

/* logging the request and responses call */
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

/* defining a default directory for static files */
app.use(express.static(path.join(__dirname,'public')));

/* adding the middleware bodyParser */
app.use(bodyParser.urlencoded({ extended: false }));

/* indicating to express where are the routes */
app.use('/api', routes);

/* raising the express to listen the service in a port */
var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("Magic is happing on port " + port);
});
