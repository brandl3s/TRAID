//js for form
console.log("app.js ready to display the form");

var z3jxa1g12hidja;(function(d, t) {
	var s = d.createElement(t), options = {
	'userName':'traid',
	'formHash':'z3jxa1g12hidja',
	'autoResize':true,
	'height':'437',
	'async':true,
	'host':'wufoo.com',
	'header':'show',
	'ssl':true};
	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
	s.onload = s.onreadystatechange = function() {
	var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
	try { z3jxa1g12hidja = new WufooForm();z3jxa1g12hidja.initialize(options);z3jxa1g12hidja.display(); } catch (e) {}};
	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})
(document, 'script');

// WUFOO Code

// var request = require("request");

// request({
//   uri: "https://traid.wufoo.com/api/v3/forms/z3jxa1g12hidja.json",
//   method: "GET",
//   auth: {
//     'username': 'OVCG-CF48-JQO1-KQ4W',
//     'password': 'traidREMADE',
//     'sendImmediately': false
//   }
// }, function(error, response, body) {
//   console.log(body);
// });

// var request = require("request");

// request({
//   uri: "https://traid.wufoo.com/api/v3/forms/z3jxa1g12hidja/fields.json",
//   method: "GET",
//   auth: {
//     'username': 'OVCG-CF48-JQO1-KQ4W',
//     'password': 'traidREMADE',
//     'sendImmediately': false
//   }
// }, function(error, response, body) {
//   console.log(body);
// });

// var request = require("request");

// request({
//   uri: "https://traid.wufoo.com/api/v3/forms/z3jxa1g12hidja/comments.json",
//   method: "GET",
//   auth: {
//     'username': 'OVCG-CF48-JQO1-KQ4W',
//     'password': 'traidREMADE',
//     'sendImmediately': false
//   }
// }, function(error, response, body) {
//   console.log(body);
// });

// var request = require("request");

// request({
//   uri: "https://traid.wufoo.com/api/v3/forms/z3jxa1g12hidja/entries.json?sort=EntryId&sortDirection=DESC",
//   method: "GET",
//   auth: {
//     'username': 'OVCG-CF48-JQO1-KQ4W',
//     'password': 'traidREMADE',
//     'sendImmediately': false
//   }
// }, function(error, response, body) {
//   console.log(body);
// });

// var request = require("request");

// request({
//     uri: "https://traid.wufoo.com/api/v3/forms/z3jxa1g12hidja/entries.json",
//     method: "POST",
//     auth: {
//         'username': 'OVCG-CF48-JQO1-KQ4W',
//         'password': 'traidREMADE',
//         'sendImmediately': false
//     },
//     form: {
//         'Field4' : 'Feeling',
//         'Field1' : 'Test',
//         'Field2' : 'Email',
//     }
// }, function(error, response, body) {
//   console.log(body);
// });


// ---- Code Protoype for Passing Data to Wufoo ----

// <!DOCTYPE html>
// <html>
// <body>

// <h2>test</h2>

// <select id="feeling">
//     <option value="happy">Happy</option>
//     <option value="sad">Sad</option>
//     <option value="ok">I'm OK</option>
// </select>
// <input id="comment">
// <input id="email">

 
// <button type="button" id="send">Send Form</button>

// <div id="status"></div>

// <script>

// document.getElementById("send").addEventListener("click", sendData);

// function sendData() {

//     var data = {
//         Field1: document.getElementById('feeling').value,
//         Field2: document.getElementById('comment').value,
//         Field3: document.getElementById('email').value
//     };

//     console.log(data);


//     //http://api.jquery.com/jQuery.ajax/
//     $.ajax({
//       method: "POST",
//       url: "https://traidtest.wufoo.com/api/v3/forms/z1fo42ir16coxbu/entries.json",
//       data: data,
//       username: '22CA-0WFA-5XA2-HFB1',
//       password: 'F98-8Ld-tKw-JRK',
//       dataType: "json"
//     })
//   .done(function( msg ) {
//       var message = '';
//     if (msg.Success === 1) {
//         message = 'Thank you for your repsonse';
//     } else if (msg.Success === 0) {
//         message = msg.FieldErrors[0].ErrorText;
//     } else {
//         message = 'unknown error has accored';
//     }

//     document.getElementById('status').innerHTML = message;

//   });
// };

// </script>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
// </body>
// </html>



