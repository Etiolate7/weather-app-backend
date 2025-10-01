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
  if (weather.some((element) => element.cityName.toLowerCase() === newCity.cityName.toLowerCase())) {
    res.json({ result: false, error: "City already saved" });
  } else {
    weather.push(newCity);
    res.json({ result: true, weather: newCity });
  }
});


router.get("/weather", (req, res) => {
  res.json({ weather });
});


router.get("/weather/:cityName", (req, res) => {
  const param = req.params["cityName"];
  const found = weather.find(element => element.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  if (found) {
    res.json({ result: true, weather: found });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});


router.delete("/weather/:cityName", (req, res) => {
  const param = req.params["cityName"];
  const found = weather.find((element) => element.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  console.log(param)
  if (found) {
    console.log(found)
  const index = weather.indexOf(found)
  weather.splice(index, 1)
  console.log(index)
  console.log(weather)
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

module.exports = router;
