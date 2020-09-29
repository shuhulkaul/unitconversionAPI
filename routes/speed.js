const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/mps/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/kmph/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/ftps/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/mph/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/kt/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //speed
  function speed() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'meters per second';
        break;
      case 1:
        temp = temp * 0.277777778;
        unit = 'kilometers per hour';
        break;
      case 2:
        temp = temp * 0.3048;
        unit = 'feet per second';
        break;
      case 3:
        temp = temp * 0.44704;
        unit = 'miles per hour';
        break;
      case 4:
        temp = temp * 0.514444444;
        unit = 'knots';
        break;

      default:
        break;
    }
  }

  speed();

  response.measure = 'speed';
  response.unit = unit;
  //mps
  response.result['mps'] = temp;
  //kmph
  response.result['kmph'] = temp / 0.277777778;
  //ftps
  response.result['ftps'] = temp / 0.3048;
  //mph
  response.result['mph'] = temp / 0.44704;
  //kt
  response.result['kt'] = temp / 0.514444444;
  return response;
};

module.exports = router;
