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

// SENDING DATA TO WUFOO & adding emoji 'selected'
var reset = function() {
  shocked.getElementsByTagName('img')[0].src='../images/emojis/1f62e.png';
  speechless.getElementsByTagName('img')[0].src='../images/emojis/1f636.png';
  angry.getElementsByTagName('img')[0].src='../images/emojis/1f621.png';
  sad.getElementsByTagName('img')[0].src='../images/emojis/1f625.png';
  thoughtful.getElementsByTagName('img')[0].src='../images/emojis/1f914.png';
} 

document.getElementById("send").addEventListener("click", sendData);

var reaction = '';

function emojiClick(event)
{
  // remove the selected class from all the buttons inside #emoji-button
  $('#emoji-button button').removeClass('selected');

  // work out which is the one button that has been clicked (ie the event target)
  var button = event.currentTarget;

  // update the value of reaction
  reaction = button.id;
  console.log('reaction is ' + reaction)

  // add the selected class to the button which has been clicked
  $(button).addClass('selected');
}

//assign clickable div to variable

/*
// the jQuery way
$('#shocked').click(emojiClick);

// the vanilla JS way
var shocked = document.getElementById('shocked');
shocked.addEventListener('click', emojiClick);

*/

var reactions = [ 'shocked', 'sad', 'speechless', 'angry', 'thoughtful']

for (var i = 0; i < reactions.length; i++) 
{
  var currentReaction = reactions[i];
  var currentButton = document.getElementById(currentReaction);
  currentButton.addEventListener('click', emojiClick);
}

//listen for the click
/*shocked.addEventListener('click', function() {
      //change all the reactions back to their original
     reset();
      reaction = 'shocked';
    //change this reaction
    if (shocked.getElementsByTagName('img')[0].src === "../images/emojis/1f62e.png") { 
         shocked.getElementsByTagName('img')[0].src='../images/emojis/1f62es.png';
    } else {
         shocked.getElementsByTagName('img')[0].src='../images/emojis/1f62es.png';
    }
}); 

var sad = document.getElementById('sad');
sad.addEventListener('click', function() {
     reset();
      reaction = 'sad';
    if (sad.getElementsByTagName('img')[0].src === "../images/emojis/1f625.png") { 
         sad.getElementsByTagName('img')[0].src='../images/emojis/1f625s.png';
    } else {
         sad.getElementsByTagName('img')[0].src='../images/emojis/1f625s.png';
    }
}); 
var speechless = document.getElementById('speechless');
speechless.addEventListener('click', function() {
     reset();
      reaction = 'speechless';
    if (speechless.getElementsByTagName('img')[0].src === "../images/emojis/1f636.png") { 
         speechless.getElementsByTagName('img')[0].src='../images/emojis/1f636s.png';
    } else {
         speechless.getElementsByTagName('img')[0].src='../images/emojis/1f636s.png';
    }
}); 
var angry = document.getElementById('angry');
angry.addEventListener('click', function() {
     reset();
      reaction = 'angry';
    if (angry.getElementsByTagName('img')[0].src === "../images/emojis/1f621.png") { 
         angry.getElementsByTagName('img')[0].src='../images/emojis/1f621s.png';
    } else {
         angry.getElementsByTagName('img')[0].src='../images/emojis/1f621s.png';
    }
}); 
var thoughtful = document.getElementById('thoughtful');
thoughtful.addEventListener('click', function() {
     reset();
      reaction = 'thoughtful';
    if (thoughtful.getElementsByTagName('img')[0].src === "../images/emojis/1f914.png") { 
         thoughtful.getElementsByTagName('img')[0].src='../images/emojis/1f914s.png';
    } else {
         thoughtful.getElementsByTagName('img')[0].src='../images/emojis/1f914s.png';
    }
}); 

*/

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
        message = "<h1>Thank you</h1> <h2>How you help</h2> <p>Shopping at TRAID charity shops and donating unwanted clothes raises funds to support projects to improve the lives of garment workers globally.</p>";
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
    // document.getElementById('reactionPage').style.display = "none";
  });
};
// -- Screen Saver Timer -- 
var timeout;

function goHome() {
    location.href = "..//screen-saver";
    clearTimeout(timeout);
}

    document.onkeypress = function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  timeout = setTimeout(goHome, 1800);
};
// does this need to be an if timeout go home else keypress reset timer? OR add click/mouse

// what if it times out while they are filling out the form? 
// OR what if they start filling out the form but leave without submitting and someone quickly comes along?



