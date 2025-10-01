var express = require('express');
var router = express.Router();

let weather = [
  { cityName: "London",
    description: "cloudy",
    tempMin: 12.95,
    tempMax: 17.39 },
  {
    cityName: "Rio de Janeiro",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    tempMin: 6.03,
    tempMax: 10.59,
  },
];

router.post("/weather", (req, res) => {
  const newCity = {
    cityName: req.body.cityName,
    description: req.body.description,
    tempMin: req.body.tempMin,
    tempMax: req.body.tempMax,
  };
  if (weather.some((element) => element.cityName === newCity.cityName)) {
    res.json({ result: false, error: "City already saved" });
  } else {
    weather.push(newCity);
    res.json({ result: true, weather: newCity });
  }
});

module.exports = router;
