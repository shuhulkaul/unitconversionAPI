const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/micn/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/mn/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/n/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/kn/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/kgf/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/lbf/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});

var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //force
  function force() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'micronewtons';
        break;
      case 1:
        temp = temp * 1000;
        unit = 'millinewtons';
        break;
      case 2:
        temp = temp * 1000000;
        unit = 'newtons';
        break;
      case 3:
        temp = temp * 1000000000;
        unit = 'kilonewtons';
        break;
      case 4:
        temp = temp * 9806650;
        unit = 'kilogram-force';
        break;
      case 5:
        temp = temp * 4448221.62;
        unit = 'pound-force';
        break;
      default:
        break;
    }
  }
  force();

  response.measure = 'force';
  response.unit = unit;

  //microN
  response.result['micn'] = temp;
  //milliN
  response.result['mn'] = temp / 1000;
  //N
  response.result['n'] = temp / 1000000;
  //kN
  response.result['kn'] = temp / 1000000000;
  //kgf
  response.result['kgf'] = temp / 9806650;
  //lbf
  response.result['lbf'] = temp / 4448221.62;

  return response;
};

module.exports = router;
