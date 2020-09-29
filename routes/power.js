const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/w/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/kw/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/mw/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/calps/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/btuph/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/hpi/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/hpm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //Power
  function power() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'watts';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'kilowatts';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'megawatts';
        break;
      case 3:
        temp = temp * 4.1868;
        unit = 'calories per second';
        break;
      case 4:
        temp = temp * 0.29307107;
        unit = 'BTUs per hour';
        break;
      case 5:
        temp = temp * 745.699872;
        unit = 'horsepower (mech)';
        break;
      case 6:
        temp = temp * 735.49875;
        unit = 'horsepower (metric)';
        break;
      default:
        break;
    }
  }
  power();

  response.measure = 'power';
  response.unit = unit;

  //watts
  response.result['w'] = temp;
  //kW
  response.result['kw'] = temp / 1000;
  //MW
  response.result['mw'] = temp / 1000000;
  //cal/s
  response.result['calps'] = temp / 4.1868;
  //BTUph
  response.result['btuph'] = temp / 0.29307107;
  //hp I
  response.result['hpi'] = temp / 745.699872;
  //hp M
  response.result['hpm'] = temp / 735.49875;
  return response;
};

module.exports = router;
