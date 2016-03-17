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
