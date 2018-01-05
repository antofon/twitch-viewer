$(document).ready(function() {
  "use strict";

  var $allButton = $('#all-button');
  var $onlineButton = $('#online-button');
  var $offlineButton = $('#offline-button');

  var streamersURL = {
    esl_sc2_URL: {
      url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?',
      status: false
    },

    freecodecamp_URL: {
      url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?',
      status: false
    }
  };

  //test print url in streamers object
  console.log(streamersURL.esl_sc2_URL.url);

  $allButton.click(function() {
    $.getJSON(esl_sc2, function(data) {
      if (data.stream === null) {
        console.log("ESL_SC2 offline");
      } else {
        console.log("ESL_SC2 online");
        console.log(data);
      }

    });
    $.getJSON(freecodecamp_URL, function(data) {
      if (data.stream === null) {
        console.log("freecodecamp offline");
      } else {
        console.log("freecodecamp online");
        console.log(data);
      }
    });
  });

  $offlineButton.click(function() {
    $.getJSON(esl_sc2, function(data) {
      if (data.stream === null) {
        console.log("ESL_SC2 offline");
      } else {
        console.log("ESL_SC2 online");
        console.log(data);
      }

    });
    $.getJSON(freecodecamp_URL, function(data) {
      if (data.stream === null) {
        console.log("freecodecamp offline");
      } else {
        console.log("freecodecamp online");
        console.log(data);
      }
    });

  });
