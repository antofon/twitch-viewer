$(document).ready(function() {
  "use strict";

  var $allButton = $('#all-button');
  var $onlineButton = $('#online-button');
  var $offlineButton = $('#offline-button');

  var streamersURL = {
    'esl_sc2_URL': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?',
      'status': false
    },

    'freecodecamp_URL': {
      'url': 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
      'status': false
    }
  };

  $allButton.click(function() {
    for (var key in streamersURL) {
      if (streamersURL.hasOwnProperty(key)) {
        //declare another function to prevent key from iterating to next value, since the function in 'click' is immediately called
        (function(key) {
          $.getJSON(streamersURL[key].url, function(data) {
            if (data.stream === null) {
              console.log(key + " offline");
            } else {
              console.log(key + " online");
              console.log(data);
            }
          });
        })(key);
      }
    };
  });
});

// $offlineButton.click(function() {
//   $.getJSON(esl_sc2_URL, function(data) {
//     if (data.stream === null) {
//       console.log("ESL_SC2 offline");
//     } else {
//       console.log("ESL_SC2 online");
//       console.log(data);
//     }
//
//   });
//   $.getJSON(freecodecamp_URL, function(data) {
//     if (data.stream === null) {
//       console.log("freecodecamp offline");
//     } else {
//       console.log("freecodecamp online");
//       console.log(data);
//     }
//   });
//
// });

// });