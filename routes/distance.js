const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/mic/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/mm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/cm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/m/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/km/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/mil/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/in/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/ft/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/yd/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/mi/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 9));
});
router.get('/nm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 10));
});
router.get('/fm/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 11));
});
router.get('/ch/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 12));
});
router.get('/fur/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 13));
});
router.get('/ly/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 14));
});

router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //distance
  function distance() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'mircons';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'millimeters';
        break;
      case 2:
        temp = temp * 10000;
        unit = 'centimeters';
        break;
      case 3:
        temp = temp * 1000000;
        unit = 'meters';
        break;
      case 4:
        temp = temp * 1000000000;
        unit = 'kilometers';
        break;
      case 5:
        temp = temp * 25.4;
        unit = 'mils/thou';
        break;
      case 6:
        temp = temp * 25400;
        unit = 'inches';
        break;
      case 7:
        temp = temp * 304800;
        unit = 'feet';
        break;
      case 8:
        temp = temp * 914400;
        unit = 'yards';
        break;
      case 9:
        temp = temp * 1609344000;
        unit = 'miles';
        break;
      case 10:
        temp = temp * 1852000000;
        unit = 'nautical miles';
        break;
      case 11:
        temp = temp * 1828800;
        unit = 'fathoms';
        break;
      case 12:
        temp = temp * 20116800;
        unit = 'chains';
        break;
      case 13:
        temp = temp * 201168000;
        unit = 'furlongs';
        break;
      case 14:
        temp = temp * 9460730473000000000000;
        unit = 'light years';
        break;
      default:
        break;
    }
  }

  distance();

  response.measure = 'distance';
  response.unit = unit;

  //Microns
  response.result['mic'] = temp;

  //Millimeter

  response.result['mm'] = temp / 1000;

  //Centimeter

  response.result['cm'] = temp / 10000;

  //Meter
  response.result['m'] = temp / 1000000;

  //Kilometer
  response.result['km'] = temp / 1000000000;

  //Mils/Thou
  response.result['mil'] = temp / 25.4;

  //Inches
  response.result['in'] = temp / 25400;

  //Feet

  response.result['ft'] = temp / 304800;

  //Yard
  response.result['yd'] = temp / 914400;

  //Miles
  response.result['mi'] = temp / 1609344497.89;

  //Nautical Miles
  response.result['nm'] = temp / 1851999325.87;

  //Fathoms
  response.result['fm'] = temp / 1828798.82;

  //Chains
  response.result['ch'] = temp / 20116798.12;

  //Furlongs
  response.value['fur'] = temp / 201168385.98;

  //Light Years
  response.value['ly'] = temp * 0.0000000000000000000001057;

  return response;
};

module.exports = router;
