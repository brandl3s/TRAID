/* ----- YOUTUBE -----*/
//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("player.js ready to load the video page");

document.getElementById('player').addEventListener('ended',function(){
     window.location.href = "reaction";
 },false);
