$(document).ready(function() {
  "use strict";

  var $allButton = $('#all-button');
  var $onlineButton = $('#online-button');
  var $offlineButton = $('#offline-button');
  var twitchURL = "https://www.twitch.tv/";

  var streamers = {
    'freecodecamp': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?'
    },

    'OgamingSC2': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2?callback=?'
    },

    'esl_sc2': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?'
    },

    'RobotCaleb': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb?callback=?'
    }

  };

  $allButton.click(function() {
    for (var key in streamers) {
      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is offline aka 'null'
            if (data.stream === null) {
              console.log(key + " offline");
            } else {
              console.log(key + " online");
              console.log(data);
              console.log(twitchURL + key);
            }
          });
        })(key);
      }
    };
  });

  $onlineButton.click(function() {
    for (var key in streamers) {

      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is online aka not 'null'
            if (data.stream !== null) {
              console.log(key + " online");
              console.log(data);
              console.log(twitchURL + key);
              //append img tag, and attributes with values to online content.
              //BUG: Values continue to populate with each click, in this case, images
              $('.online-content').append("<img src='" + data.stream.channel.logo + "' alt='random image' class='image-responsive circle'>");
            }
          });
        })(key);
      }
    };
  });

  $offlineButton.click(function() {
    for (var key in streamers) {
      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is offline aka 'null'
            if (data.stream === null) {
              console.log(key + " offline");
            }
          });
        })(key);
      }
    };
  });
});
