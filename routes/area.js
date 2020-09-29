const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/sqmm/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/sqcm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/sqm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/ha/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/sqkm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/sqin/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/sqft/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/sqyd/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/ac/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/sqmi/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 9));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //area
  function area() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'square millimeters';
        break;
      case 1:
        temp = temp * 100;
        unit = 'square centimeters';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'square meters';
        break;
      case 3:
        temp = temp * 10000000000;
        unit = 'hectares';
        break;
      case 4:
        temp = temp * 1000000000000;
        unit = 'square kilometers';
        break;
      case 5:
        temp = temp * 645.16;
        unit = 'square inches';
        break;
      case 6:
        temp = temp * 92903.04;
        unit = 'square feet';
        break;
      case 7:
        temp = temp * 836127.36;
        unit = 'square yard';
        break;
      case 8:
        temp = temp * 4046856422;
        unit = 'acres';
        break;
      case 9:
        temp = temp * 2589988110000;
        unit = 'square miles';
        break;
      default:
        break;
    }
  }

  area();

  response.measure = 'area';
  response.unit = unit;
  //sq mm
  response.result['sqmm'] = temp;

  //sq cm
  response.result['sqcm'] = temp / 100;

  //sq m

  response.result['sqm'] = temp / 1000000;

  //hectares

  response.result['ha'] = temp / 10000000000;

  //sq km

  response.result['sqkm'] = temp / 1000000000000;

  //sq in
  response.result['sqin'] = temp / 645.16;

  //sq ft
  response.result['sqft'] = temp / 92903.04;

  //sq yd
  response.result['sqyd'] = temp / 836127.36;

  //acres
  response.result['ac'] = temp / 4046856422;

  //sq miles
  response.result['sqmi'] = temp / 2589988110000;

  return response;
};

module.exports = router;
