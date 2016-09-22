//js for form
console.log("app.js ready to display the form");

var emailField = 'Field3';
var reactionField = 'Field8';
var commentField = 'Field2';

// var z3jxa1g12hidja;(function(d, t) {
// 	var s = d.createElement(t), options = {
// 	'userName':'traid',
// 	'formHash':'z3jxa1g12hidja',
// 	'autoResize':true,
// 	'height':'437',
// 	'async':true,
// 	'host':'wufoo.com',
// 	'header':'show',
// 	'ssl':true};
// 	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
// 	s.onload = s.onreadystatechange = function() {
// 	var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
// 	try { z3jxa1g12hidja = new WufooForm();z3jxa1g12hidja.initialize(options);z3jxa1g12hidja.display(); } catch (e) {}};
// 	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
// })
// (document, 'script');

// SENDING DATA TO WUFOO & adding emoji selection

document.getElementById("send").addEventListener("click", sendData);

var reaction = '';

document.getElementById('shocked').addEventListener('click', function() {
	  reaction = 'shocked'; 
});
document.getElementById('sad').addEventListener('click', function() {
	  reaction = 'sad'; 
});
document.getElementById('speechless').addEventListener('click', function() {
	  reaction = 'speechless'; 
});
document.getElementById('angry').addEventListener('click', function() {
	  reaction = 'angry'; 
});
document.getElementById('thoughtful').addEventListener('click', function() {
	  reaction = 'thoughtful'; 
});


function sendData() {


  var message = "Sending, please wait";
  document.getElementById("response").innerHTML = message;

    var data = {
  		Field8: reaction,
		  Field2: document.getElementById("comment").value,
      Field3: document.getElementById("email").value
    };

    console.log(data);

    //http://api.jquery.com/jQuery.ajax/
    $.ajax({
      method: "POST",
      url: "https://traidtest.wufoo.com/api/v3/forms/z1fo42ir16coxbu/entries.json",
      data: data,
      username: '22CA-0WFA-5XA2-HFB1',
      password: 'F98-8Ld-tKw-JRK',
      dataType: "json"
    })
  .done(function( msg ) {

    // SUCCESS OR ERROR MESSAGE

    console.log(msg);
     if (msg.Success === 1) {
        message = document.write("<h1>Thank you</h1> <h2>How you help</h2> <p> Shopping at TRAID charity shops and donating unwanted clothes raises funds to support projects to improve the lives of garment workers globally.</p>");
    } else if (msg.Success === 0) {
        //figure out the error

        if (msg.FieldErrors[0].ID === emailField) {
          message = "Please provide a valid email address";          
        } else {
          message = msg.FieldErrors[0].ErrorText;          
        }

        // document.getElementById("failed").style.display = "block";
    } else {
        message = 'unknown error has occurred';
    }

    document.getElementById("response").innerHTML = message;

  });
};


