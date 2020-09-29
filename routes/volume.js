const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/ml/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/l/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/cum/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/cui/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/cuft/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/cuyd/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/ozimp/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/ptimp/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/galimp/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/ozus/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 9));
});
router.get('/ptus/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 10));
});
router.get('/galus/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 11));
});

router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //volume
  function volume() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'milliliters';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'liters';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'cubic meters';
        break;
      case 3:
        temp = temp * 16.387064;
        unit = 'cubic inches';
        break;
      case 4:
        temp = temp * 28316.84659;
        unit = 'cubic feet';
        break;
      case 5:
        temp = temp * 764554.858;
        unit = 'cubic yard';
        break;
      case 6:
        temp = temp * 28.4130625;
        unit = 'fluid ounce imperial';
        break;
      case 7:
        temp = temp * 568.26125;
        unit = 'pint imperial';
        break;
      case 8:
        temp = temp * 4546.09;
        unit = 'gallons imperial';
        break;
      case 9:
        temp = temp * 29.57352956;
        unit = 'fluid ounce US';
        break;
      case 10:
        temp = temp * 473.176473;
        unit = 'pint US';
        break;
      case 11:
        temp = temp * 3785.411784;
        unit = 'gallon US';
        break;
      default:
        break;
    }
  }
  volume();

  response.measure = 'volume';
  response.unit = unit;

  //millilitres cc
  response.result['ml'] = temp;

  //litres
  response.result['l'] = temp / 1000;

  //cu. m
  response.result['cum'] = temp / 1000000;

  //cu. in
  response.result['cui'] = temp / 16.387064;

  //cu ft.
  response.result['cuft'] = temp / 28316.84659;

  //cu yd
  response.result['cuyd'] = temp / 764554.858;

  //fluid ounce
  response.result['ozimp'] = temp / 28.4130625;

  //pt imp
  response.result['ptimp'] = temp / 568.26125;

  //gal imp
  response.result['galimp'] = temp / 4546.09;

  //fl oz
  response.result['ozus'] = temp / 29.57352956;

  //pt us
  response.result['ptus'] = temp / 473.176473;

  //gal us
  response.result['galus'] = temp / 3785.411784;

  return response;
};

module.exports = router;
