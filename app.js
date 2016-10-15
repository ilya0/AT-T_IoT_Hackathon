var express = require('express'); //include express for routing
var path = require('path');
var logger = require('morgan'); //logs requests
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var routes = require('./routes/links.js'); /// this is the requireing of the routes links
var shortid = require('shortid');


//express
var app = express();
//middle ware that does a bunch of things, from the npm
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // this is servering index.hhtml by defaulting the public folder as static folder
//namespacing
app.use('/api',routes); //namespacing to allocated the routes to root ** needs to be after the app.use



// //test route that goesto the ajax
// app.post('api/test',function(req,res){
//   res.json({message:"Successfull AJAX call"})
// });


app.listen(port, function() {
  console.log('Listening on port: ', port);
});
