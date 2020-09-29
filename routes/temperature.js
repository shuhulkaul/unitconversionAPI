const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/c/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/f/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/k/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //Temperature
  function temperature() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'celsius';
        break;
      case 1:
        temp = ((temp - 32) * 5) / 9;
        unit = 'fahrenheit';
        break;
      case 2:
        temp = temp - 273.15;
        unit = 'kelvin';
        break;
      default:
        break;
    }
  }

  temperature();

  response.measure = 'temperature';
  response.unit = unit;
  //C
  response.result['c'] = temp;
  //F
  response.result['f'] = (temp * 9) / 5 + 32;
  //K
  response.result['k'] = parseFloat(temp) + 273.15;
  return response;
};

module.exports = router;
