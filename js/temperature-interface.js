var apiKey = require('./../.env').apiKey;
var temperature = require('../js/temperature.js').temperature;

$(document).ready(function() {
  $('#temperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var tempFormat = $("input[name=tempradio]:checked").val();
    console.log(tempFormat);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var tempOutput = response.main.temp;
      console.log(tempOutput);
      var formattedTemp = temperature(tempOutput, tempFormat);
      $('.showWeather').text("Today's temperature in " + city + " is " + formattedTemp + " degrees.");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
