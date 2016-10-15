//checked this is all good, somethings are simplified some are not

var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
          linkaddress: String,
          title: String
});


var Linklist = mongoose.model('linklist', linkSchema);
module.exports = Linklist;
