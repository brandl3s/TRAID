//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("app.js ready to share documentaries");

// function goNext(url, reaction) {
	
//     location.href = url + "?" + reaction;
// }

// function readData( ) {
//     var reaction = location.search.substring(1, location.search.length);

//     console.log(reaction)
// }

// function loadPage(url) {
// console.log("loaded")
// 	location.href = url

// }

/* -- Go Home from Video -- */

document.getElementById("homeButton").onclick = function () {
        location.href = "..//";
    };

