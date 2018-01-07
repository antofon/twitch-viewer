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
    },

    'cretetion': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/cretetion?callback=?'
    },

    'storbeck': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/storbeck?callback=?'
    },

    'habathcx': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/habathcx?callback=?'
    },

    'noobs2ninjas': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas?callback=?'
    }
  };

  // Stream content on page load
  for (var key in streamers) {
    if (streamers.hasOwnProperty(key)) {
      // declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
      (function(key) {
        $.getJSON(streamers[key].url, function(data) {
          //if stream is offline aka 'null'
          if (data.stream === null) {
            $('#all').append("<div class='row'><div class='col s12 center-align'>" + "<a href='" + twitchURL + key + "' target='_blank'>" + key + "</a><br/>" + "<p>Offline</p></div></div>");
          } else {
            $('#all').append("<div class='row'><div class='col s12 center-align'><img src='" + data.stream.channel.logo + "' alt='random image' width='100' height='100' class='image-responsive circle'><a href='" + twitchURL + data.stream.channel.display_name + "' target='_blank'>" + "<br/>" + data.stream.channel.display_name + "</a>" + "<p>" + data.stream.channel.game + ": " + data.stream.channel.status + "</p> </div></div>");
          }
        });
      })(key);
    }
  };

  // Stream content for 'All' tab
  $allButton.click(function() {
    $('#all').html("");
    for (var key in streamers) {
      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is offline aka 'null'
            if (data.stream === null) {
              $('#all').append("<div class='row'><div class='col s12 center-align'>" + "<a href='" + twitchURL + key + "' target='_blank'>" + key + "</a><br/>" + "<p>Offline</p></div></div>");
            } else {
              $('#all').append("<div class='row'><div class='col s12 center-align'><img src='" + data.stream.channel.logo + "' alt='random image' width='100' height='100' class='image-responsive circle'><a href='" + twitchURL + data.stream.channel.display_name + "' target='_blank'>" + "<br/>" + data.stream.channel.display_name + "</a>" + "<p>" + data.stream.channel.game + ": " + data.stream.channel.status + "</p> </div></div>");
            }
          });
        })(key);
      }
    };
  });

  // Stream content for 'Online' tab
  $onlineButton.click(function() {
    $('#online').html("");
    for (var key in streamers) {
      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is online aka not 'null'
            if (data.stream !== null) {
              //append img tag, and attributes with values to each tab section.
              $('#online').append("<div class='row'><div class='col s12 center-align'><img src='" + data.stream.channel.logo + "' alt='random image' width='100' height='100' class='image-responsive circle'><a href='" + twitchURL + data.stream.channel.display_name + "' target='_blank'>" + "<br/>" + data.stream.channel.display_name + "</a>" + "<p>" + data.stream.channel.game + ": " + data.stream.channel.status + "</p> </div></div>");
            }
          });
        })(key);
      }
    };
  });

  // Stream content for 'Offline' tab
  $offlineButton.click(function() {
    $('#offline').html("");
    for (var key in streamers) {
      if (streamers.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamers[key].url, function(data) {
            //if stream is offline aka 'null'
            if (data.stream === null) {
              $('#offline').append("<div class='row'><div class='col s12 center-align'>" + "<a href='" + twitchURL + key + "' target='_blank'>" + key + "</a><br/>" + "<p>Offline</p></div></div>");
            }
          });
        })(key);
      }
    };
  });
});
