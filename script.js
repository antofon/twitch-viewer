$(document).ready(function() {
  "use strict";

  var $allButton = $('#all-button');
  var $onlineButton = $('#online-button');
  var $offlineButton = $('#offline-button');

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

});
