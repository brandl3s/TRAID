//js for form
console.log("app.js ready to display the form");

var emailField = 'Field3';
var reactionField = 'Field8';
var commentField = 'Field2';

document.getElementById('chooseAnotherVideo').onclick = function () {
    location.href = "..//";
};

// SENDING DATA TO WUFOO & adding emoji 'selected'
var reset = function() {
  shocked.getElementsByTagName('img')[0].src='../images/emojis/1f62e.png';
  sad.getElementsByTagName('img')[0].src='../images/emojis/1f625.png';
  angry.getElementsByTagName('img')[0].src='../images/emojis/1f621.png';
  thoughtful.getElementsByTagName('img')[0].src='../images/emojis/1f914.png';
}

document.getElementById('send').addEventListener('click', sendData);

var reaction = '';

function emojiClick(event) {
  // remove the selected class from all the buttons inside #emoji-button
  var kids = document.getElementById('emoji-button').children;

  for(var i = 0 ; i < kids.length ; i++) {

    kids[i].classList.remove('selected');
  }
  // work out which is the one button that has been clicked (ie the event target)
  var button = event.currentTarget;

  // update the value of reaction
  reaction = button.id;
  console.log('reaction is ' + reaction);

  // add the selected class to the button which has been clicked
  button.classList.add('selected');
}

var reactions = [ 'shocked', 'sad', 'angry', 'thoughtful'];

for (var i = 0; i < reactions.length; i++) {
  var currentReaction = reactions[i];
  var currentButton = document.getElementById(currentReaction);
  currentButton.addEventListener('click', emojiClick);
}

document.getElementById('response').style.opacity = 0;
document.getElementById('success').style.opacity = 0;
document.getElementById('emailError').style.opacity = 0;
document.getElementById('emojiError').style.opacity = 0;
document.getElementById('commentError').style.opacity = 0;

function sendData() {

  var message = 'Sending, please wait';
  document.getElementById('response').innerHTML = message;

    var data = {
  		Field8: reaction,
		  Field2: document.getElementById('reaction-text').innerHTML,
      Field3: document.getElementById('email').value
    };

    console.log(data);

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
        document.getElementById('reactionPage').style.opacity = 0;
        document.getElementById('success').style.opacity = 1;
        document.getElementById('success').style.zIndex = 60;
        document.getElementById('replay').onclick = function () {
            location.href = "..//screen-saver";
        };
        } else if (msg.Success === 0) {
          //figure out the error
          if (msg.FieldErrors[0].ID === emailField) {
            document.getElementById('reactionPage').style.opacity = 0;
            document.getElementById('emailError').style.opacity = 1;
            document.getElementById('emailError').style.zIndex = 60;
            document.getElementById('emailResubmit').onclick = function () {
              document.getElementById('reactionPage').style.opacity = 1;
              document.getElementById('emailError').style.opacity = 0;
              document.getElementById('emailError').style.zIndex = 10;
            };
          } else if (msg.FieldErrors[0].ID === reactionField) {
            document.getElementById('reactionPage').style.opacity = 0;
            document.getElementById('emojiError').style.opacity = 1;
            document.getElementById('emojiError').style.zIndex = 60;
            document.getElementById('emojiResubmit').onclick = function () {
              document.getElementById('reactionPage').style.opacity = 1;
              document.getElementById('emojiError').style.opacity = 0;
              document.getElementById('emojiError').style.zIndex = 10;
            };
          } else {
            message = msg.FieldErrors[0].ErrorText;
            document.getElementById('reactionPage').style.opacity = 0;
            document.getElementById('commentError').style.opacity = 1;
            document.getElementById('commentError').style.zIndex = 60;
            document.getElementById('commentResubmit').onclick = function () {
              document.getElementById('reactionPage').style.opacity = 1;
              document.getElementById('commentError').style.opacity = 0;
              document.getElementById('commentError').style.zIndex = 10;
            };
        }
      } else {
          message = 'unknown error has occurred';
      }
      // document.getElementById('reactionPage').style.opacity = 0;
      // document.getElementById('response').style.opacity = 1;
    })
    .fail(function() {
    //sommink goes here too prolly
      document.getElementById('reactionPage').style.opacity = 0;
      document.getElementById('response').style.opacity = 1;
    });
};
// -- Screen Saver Timer --
var timeout;

function goHome() {
    location.href = '..//screen-saver';
    clearTimeout(timeout);
}

var clear = function() {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
    setTimer();
  }
};

var setTimer = function() {
  timeout = setTimeout(goHome, 600000);
};

document.addEventListener('keypress', clear);
document.addEventListener('touch', clear);
setTimer();
