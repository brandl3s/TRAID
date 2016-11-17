//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("player.js ready to load the video page");


//listens for the end of a selected video
var player = document.getElementById('player');
if (player) {
  player.addEventListener('ended',function(){
       window.location.href = "../../reaction";
   }, false);
}

 // -- Screen Saver Timer --
 var timeout;

 function goHome() {
     location.href = '..//';
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
