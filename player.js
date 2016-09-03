/* ----- YOUTUBE -----*/
//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("player.js ready to load the video page");

        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('player', {
              height: '765',
              width: '1010',
              videoId: 'QIpTGbbqS0Q',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
        }

        // autoplay video
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // when video ends
        function onPlayerStateChange(event) {        
            if(event.data === YT.PlayerState.ENDED) {          
                location.href = "reaction"
            }
        }
