// frontend.js
console.log("js frontend script connected");

$( document ).ready(function(){ //on ready command
console.log("document readied");
var givemedata ={};

//     $("testbutton").click(function(){
//         $.ajax({
//           url: "/links",
//            //context: document.body
//           }).done(function(data){
//               givemedata = data;
//             console.log(data);

//             $("#div1").html("this is changing the div1 on button click");


// //need to change the appropriate array keys to be displayed
//             for(i=0; i< data.results.length;i++){
//             console.log(data.results[i].name);
//             $("#div1").append(data.results[i].name);
//             $(".ulclass").append('<li>'+data.results[i].name+'</li>');

//             }

//            });
//         });

$("#testbutton").click(function(){
  console.log("test button pressed");
});



    $("#inputbutton").click(function(){ //on button click do this following stuff
       var linkaddressvalue = $('#linkaddressbox').val();
       var titleboxvalue = $('#titlebox').val();


      $(".ulclass").append("<li>" +titleboxvalue+" "+linkaddressvalue+ "</li>"  );
        console.log(linkaddressvalue); //console log theut value
        console.log(titleboxvalue); //console log theut value


        pushdata(linkaddressvalue,titleboxvalue);
        console.log("pushdata ran");
    });


});

function pushdata(linkaddressvalue,titleboxvalue){
         $.ajax({ //ajax post request
          method: "POST", //post
          crossDomain: false,
          url: "/links", //api url
          data: {
            link: linkaddressvalue,
            title: titleboxvalue
          }, //data is textboxinfo var but it needs to be in object format for the ajax data
          error: function( response ){ //if error do this
            console.log("There was a problemmo.");
          }
        })

      .done(function( textboxinfo ){ //on done do this function
        console.log(textboxinfo); // console log var textboxinfo
       alert( "Data Saved: " + textboxinfo ); //alert textbox var


    });


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.example.org/ajax.php", true);
xhr.setRequestHeader("X-My-Custom-Header", "some value");
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();

};



