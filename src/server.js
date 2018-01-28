'use strict'

//import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parcer');
var Comment = require('./model/comments');

//create instances
var app = express();
var router = express.Router();

//set port
var port = process.env.API_PORT || 3000;

//db config
mongoose.connect('mongodb://Mishuboom:No_meat1@ds117888.mlab.com:17888/tustin');

//use bodyparser to configure the API and find JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use CORS to stop Cross Origin Resource Sharing
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Controll-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //remove cacheing so we get most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now we can set the route path and initialize the api
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
})

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments
      res.json(comments)
    });
  })

  //post new comment to the database
  .post(function(req, res) {
    var comment = new Comment();
    //body parser lets us use the req.body
    comment.author = req.body.author;
    comment.text = req.body.text;
    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });

//use our router configuration when we call /api
app.use('/api', router);

//starts server and listens for requests
app.listen(port, function() {
  console.log(`appi running on port ${port}`);
});