'use strict'

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema.
//schema takes an object that shows the shape of your database entries
var CommentsSchema = new Schema ({
  author: String,
  text: String
});

//export
module.exports = mongoose.model('Comment', CommentsSchema);