(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1715ef0103a87ce6bbb2039435f72d21";

},{}],2:[function(require,module,exports){
exports.temperature = function(temp, scale) {
  if (scale === "f") {
    var outputTemp = (parseInt(temp) - 273.15) * 1.8 + 32;
    outputTemp = Math.round(outputTemp * 10) / 10;
    return outputTemp;
  } else {
    var outputTemp = parseInt(temp) - 273.15;
    outputTemp = Math.round(outputTemp * 10) / 10;
    return outputTemp;
  }
};

},{}],3:[function(require,module,exports){
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

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#humidity').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

},{"../js/temperature.js":2,"./../.env":1}]},{},[3]);
