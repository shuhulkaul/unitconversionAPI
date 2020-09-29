const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/j/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/kj/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/mj/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/kwh/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/cal/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/kcal/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/btu/:number', async (req, res) => {
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
  //Energy
  function energy() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'joules';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'kilojoules';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'megajoules';
        break;
      case 3:
        temp = temp * 3600000;
        unit = 'kilowatt-hours';
        break;
      case 4:
        temp = temp * 4.1868;
        unit = 'calories';
        break;
      case 5:
        temp = temp * 4186.8;
        unit = 'kilocalories';
        break;
      case 6:
        temp = temp * 1055.055853;
        unit = 'british thermal units';
        break;
      default:
        break;
    }
  }
  energy();

  response.measure = 'energy';
  response.unit = unit;

  //joules
  response.result['j'] = temp;
  //kJ
  response.result['kj'] = temp / 1000;
  //MJ
  response.result['mj'] = temp / 1000000;
  //kWh
  response.result['kwh'] = temp / 3600000;
  //cal
  response.result['cal'] = temp / 4.1868;
  //kcal
  response.result['kcal'] = temp / 4186.8;
  //BTU
  response.result['btu'] = temp / 1055.055853;

  return response;
};

module.exports = router;
