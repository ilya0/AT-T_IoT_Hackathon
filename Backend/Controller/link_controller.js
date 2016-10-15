var linkcontroller  = {};
var Linklist        = require('../model/link_model.js'); // model linking
var mongoose        = require('mongoose');
var path            = require('path');

//this is the index page, and returns all the links
linkcontroller.index = function(req, res) {
  res.json({message:"this should be the index page"}); //test line to see if index works



  // var allthelinks = Linklist.find({},function(err,allthelinks){
  //   if(err){
  //     throw err;
  //   }
  //   //res.json(instructorslist);
  //  res.json(allthelinks);
  // });
};


//this is just a show method to display all the json links
linkcontroller.show = function(req, res) {
  res.send("this is the index")
  var allthelinks = Linklist.find({},function(err,allthelinks){
    if(err){
      throw err;
    }
    //res.json(instructorslist);
   res.json(allthelinks);
  });

};




 linkcontroller.create = function(req, res) {
//this is where the link and name is cvreated
var link = new Linklist(); // create a new object

link.title = req.body.title;  // adding the title param from the body to the title key in the object
link.address = req.body.address;
console.log(link); //just a test for the link

link.save(function(err){ ///save the link and if theres an error do this
  if(err){
    throw err;
  };

res.json({sucess:true,message:'Link created! pow'});
  });

 };





linkcontroller.destroy = function(req, res) {
Linklist.findOneAndRemove({email:req.params.email},function(err,links){
 if (err){
    throw err;
  }
  res.json(links);
  console.log("account removed");
});

};

// linkcontroller.update = function(req, res) {};

// linkcontroller.show = function(req, res) {};

// linkcontroller.edit = function(req, res) {};

// linkcontroller.destroy = function(req, res) {};












module.exports = linkcontroller;
