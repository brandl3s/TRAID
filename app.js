//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("app.js ready to share documentaries");

var goChooseAFilm = function() {
  location.href = "../choose-a-film/index.html";
};

var homeButton = document.getElementById("intro-video");
homeButton.addEventListener('click', goChooseAFilm);

var goToChooseAFilm = function() {
  location.href = "../../choose-a-film/index.html";
};

var homeButton2 = document.getElementById("back-to-choose");
homeButton2.addEventListener('click', goToChooseAFilm);

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
