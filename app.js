//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("app.js ready to share documentaries");

var chooseAFilm = function() {
  console.log('hello')
  location.href = "choose-a-film";
};

var homeButton = document.getElementById("homeButton");
homeButton.addEventListener('click', chooseAFilm);

var anotherButton = document.getElementById("another-button");
anotherButton.addEventListener('click', chooseAFilm);

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    }
};

app.initialize();
