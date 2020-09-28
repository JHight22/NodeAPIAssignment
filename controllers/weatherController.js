exports.weather_get = function (req, res) {
  let weatherData = {
    Temp: "90.5",
    Unit: "fahrenheit",
    Cloudy: "false",
    PrecipitationChance: "0",
  };

  res.send(weatherData);
};
