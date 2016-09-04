/* ----- YOUTUBE -----*/
//if this file is linked properly, then the console will print out "app.js ready to share documentaries"
console.log("player.js ready to load the video page");



     var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '765',
              width: '1010',
              videoId: 'SIinWPeq5-g',
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
            if(event.data === YT.PlayerState.PAUSED) {          
                location.href = "../"
            }
        }

