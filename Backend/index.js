var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
// var db            = require('./db'); // added db
var bodyParser    = require('body-parser');

var port          = process.env.PORT || 3000; //  sets the listining port
// var Linklist      = require('./model/link_model.js'); // model linking
// var links         = require('../Backend/Controller/link_controller.js'); //linking the controller links file
var express       = require('express'); // including theexpress file in this file
var router        = express.Router(); //simplifying the router
// var mongoose      = require('mongoose');
var logger        = require( 'morgan' ); //logs the shit into console
var path          = require('path');
var http          = require('http'); // Im not sure if I need this I just cant get this fuckign http to link with the js and the css



var shouldifly = false;

// Use middleware
app.use( logger( 'dev' ) ); // this allows the loggin into the console
app.use( bodyParser.json() ); //parses the json
app.use( bodyParser.urlencoded( { extended: false } ) ); // this is to use routes encoding
app.use(express.static(path.join(__dirname, 'public'))); // for the serving up the public files


//this is the home page
app.get('/', function(req,res){
  console.log(shouldifly);

  // res.json({message:messagedisplay});
  res.sendFile(path.join(__dirname + '/Views/index.html')); //goes through path and then opens the view
});


//change var to fly, initate flight
app.post('/activatefly', function(req,res){

    shouldifly = true;
    console.log("activate fly route hit");
    console.log(shouldifly);

     res.json({sucess:true,message:'Fly activated'});
});


app.post('/deactivatefly', function(req,res){

    shouldifly = false;
    console.log("deactivate fly route hit");
    console.log(shouldifly);

     res.json({sucess:false,message:'Fly Deactivated'});
});



app.listen(port, function() {
  console.log('drone security running on port', port);
});

module.exports = router;