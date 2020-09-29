const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/micg/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/mg/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/g/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/kg/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/t/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/oz/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/lb/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/st/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/cwtus/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/cwtuk/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 9));
});
router.get('/stus/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 10));
});
router.get('/stuk/:number', async (req, res) => {
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
  //mass
  function mass() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'micrograms';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'milligrams';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'grams';
        break;
      case 3:
        temp = temp * 1000000000;
        unit = 'kilograms';
        break;
      case 4:
        temp = temp * 1000000000000;
        unit = 'tonnes';
        break;
      case 5:
        temp = temp * 28349523.13;
        unit = 'ounces';
        break;
      case 6:
        temp = temp * 453592370;
        unit = 'pounds';
        break;
      case 7:
        temp = temp * 6350293180;
        unit = 'stone';
        break;
      case 8:
        temp = temp * 45359237000;
        unit = 'hundredweight us';
        break;
      case 9:
        temp = temp * 50802345440;
        unit = 'hundredweight uk';
        break;
      case 10:
        temp = temp * 907184740000;
        unit = 'short ton us';
        break;
      case 11:
        temp = temp * 1016046909000;
        unit = 'short ton uk';
        break;
      default:
        break;
    }
  }
  mass();

  response.measure = 'mass';
  response.unit = unit;
  //micrograms
  response.result['micg'] = temp;

  //milligrams
  response.result['mg'] = temp / 1000;

  //grams
  response.result['g'] = temp / 1000000;

  //kilograms
  response.result['kg'] = temp / 1000000000;
  //tonnes
  response.result['t'] = temp / 1000000000000;

  //ounces
  response.result['oz'] = temp / 28349523.13;

  //pounds
  response.result['lb'] = temp / 453592370;

  //stone
  response.result['st'] = temp / 6350293180;
  //Hundredweight us
  response.result['cwtus'] = temp / 45359237000;

  //Hundredweight uk
  response.result['cwtuk'] = temp / 50802345440;
  //short tons us
  response.result['stus'] = temp / 907184740000;
  //long tons uk
  response.result['stuk'] = temp / 1016046909000;

  return response;
};

module.exports = router;
