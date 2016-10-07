/* ----- Comment Resize-----*/
//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("comment.js ready to let you change the text area as ya type");

$(document)
    .one('focus.textarea', 'comment', function(){
      var savedValue = this.value;
      this.value = '';
      this.baseScrollHeight = this.scrollHeight;
      this.value = savedValue;
    })
    .on('input.textarea', 'comment', function(){
      var minRows = this.getAttribute('data-min-rows')|0,
         rows;
      this.rows = minRows;
        console.log(this.scrollHeight , this.baseScrollHeight);
      rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
      this.rows = minRows + rows;
    });




// var observe;
// if (window.attachEvent) {
//     observe = function (element, event, handler) {
//         element.attachEvent('on'+event, handler);
//     };
// }
// else {
//     observe = function (element, event, handler) {
//         element.addEventListener(event, handler, false);
//     };
// }
// function init () {
//     var text = document.getElementById('comment');
//     function resize () {
//         text.style.height = 'auto';
//         text.style.height = text.scrollHeight+'px';
//     }
//     /* 0-timeout to get the already changed text */
//     function delayedResize () {
//         window.setTimeout(resize, 0);
//     }
//     observe(text, 'change',  resize);
//     observe(text, 'cut',     delayedResize);
//     observe(text, 'paste',   delayedResize);
//     observe(text, 'drop',    delayedResize);
//     observe(text, 'keydown', delayedResize);

//     text.focus();
//     text.select();
//     resize();
// }