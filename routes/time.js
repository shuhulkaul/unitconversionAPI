const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/ns/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/mics/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/ms/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/s/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/min/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/hr/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/d/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/wk/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/yrg/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.get('/yrj/:number', async (req, res) => {
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
  //time
  function time() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'nanoseconds';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'microseconds';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'milliseconds';
        break;
      case 3:
        temp = temp * 1000000000;
        unit = 'seconds';
        break;
      case 4:
        temp = temp * 60000000000;
        unit = 'minutes';
        break;
      case 5:
        temp = temp * 3600000000000;
        unit = 'hours';
        break;
      case 6:
        temp = temp * 86400000000000;
        unit = 'days';
        break;
      case 7:
        temp = temp * 604800000000000;
        unit = 'weeks';
        break;
      case 8:
        temp = temp * 31557600000000000;
        unit = 'years (gregorian)';
        break;
      case 9:
        temp = temp * 31556952000000000;
        unit = 'years (julian)';
        break;
      default:
        break;
    }
  }

  time();

  response.measure = 'time';
  response.unit = unit;
  //ns
  response.result['ns'] = temp;
  //microsec
  response.result['mics'] = temp / 1000;
  //millisec
  response.result['ms'] = temp / 1000000;
  //sec
  response.result['s'] = temp / 1000000000;
  //min
  response.result['min'] = temp / 60000000000;
  //hr
  response.result['hr'] = temp / 3600000000000;
  //days
  response.result['d'] = temp / 86400000000000;
  //wk
  response.result['wk'] = temp / 604800000000000;
  //yr gregorian
  response.result['yrg'] = temp / 31557600000000000;
  //years julian
  response.result['yrj'] = temp / 31556952000000000;
  return response;
};

module.exports = router;
