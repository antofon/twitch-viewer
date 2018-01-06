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

    'ESL_SC2': {
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
    $('#test5').html("");
    for (var key in streamers) {

      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is online aka not 'null'
            if (data.stream !== null) {
              // console.log(data.stream.channel.display_name + " online");
              // console.log(data);
              //append img tag, and attributes with values to each tab section.

              $('#test5').append("<div class='row'><div class='col s12 center-align'><img src='" + data.stream.channel.logo + "' alt='random image' width='100' height='100' class='image-responsive circle'><h6 href='" + twitchURL + data.stream.channel.display_name + "'>" + data.stream.channel.display_name + "</h6>" + "<p>" + data.stream.channel.game + ": " + data.stream.channel.status + "</p> </div></div>");
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
