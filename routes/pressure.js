const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/pa/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/hpa/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/kpa/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/mpa/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/mbar/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/bar/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/atm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/kgpsqcm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/psi/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/hg/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 9));
});
router.get('/torr/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 10));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //pressure
  function pressure() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'pascal';
        break;
      case 1:
        temp = temp * 100;
        unit = 'hectopascal';
        break;
      case 2:
        temp = temp * 1000;
        unit = 'kilopascal';
        break;
      case 3:
        temp = temp * 1000000;
        unit = 'megapascal';
        break;
      case 4:
        temp = temp * 100;
        unit = 'millibar';
        break;
      case 5:
        temp = temp * 100000;
        unit = 'bar';
        break;
      case 6:
        temp = temp * 101325;
        unit = 'atmosphere (std)';
        break;
      case 7:
        temp = temp * 98066.5;
        unit = 'kilogram per sq. cm';
        break;
      case 8:
        temp = temp * 6894.75729;
        unit = 'pound per sq. inch';
        break;
      case 9:
        temp = temp * 3386.389;
        unit = 'inches of mercury (hg)';
        break;
      case 10:
        temp = temp * 133.3223684;
        unit = 'torr';
        break;
      default:
        break;
    }
  }
  pressure();

  response.measure = 'pressure';
  response.unit = unit;
  //pascal
  response.result['pa'] = temp;
  //hectopascal
  response.result['hpa'] = temp / 100;
  //kilopascal
  response.result['kpa'] = temp / 1000;
  //megapascal
  response.result['mpa'] = temp / 1000000;
  //millibar
  response.result['mbar'] = temp / 100;
  //bar
  response.result['bar'] = temp / 100000;
  //atm
  response.result['atm'] = temp / 101325;
  //kg per sq cm
  response.result['kgpsqcm'] = temp / 98066.5;
  //kg per sq in
  response.result['psi'] = temp / 6894.75729;
  //in hg
  response.result['hg'] = temp / 3386.389;
  //Torr
  response.result['torr'] = temp / 133.3223684;
  return response;
};

module.exports = router;
