const express = require('express');
const router = express.Router();
const config = require('config');
var error = config.get('error');
var bad_req_error = config.get('bad_request');

router.get('/b/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 0));
});
router.get('/kib/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 1));
});
router.get('/mib/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 2));
});
router.get('/gib/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 3));
});
router.get('/tib/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 4));
});
router.get('/kb/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 5));
});
router.get('/mb/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 6));
});
router.get('/gb/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 7));
});
router.get('/tb/:number', async (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json(bad_req_error);
  }
  res.status(200).send(formula(req.params.number, 8));
});
router.all('*', async (req, res) => {
  res.status(404).json(error);
});
var formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit;
  //data
  function data() {
    switch (selectedUnit) {
      case 0:
        temp = temp;
        unit = 'bytes';
        break;
      case 1:
        temp = temp * 1024;
        unit = 'kibibytes';
        break;
      case 2:
        temp = temp * 1048576;
        unit = 'mebibytes';
        break;
      case 3:
        temp = temp * 1073741824;
        unit = 'gibibytese';
        break;
      case 4:
        temp = temp * 1099511628000;
        unit = 'tebibytes';
        break;
      case 5:
        temp = temp * 1000;
        unit = 'kilobytes';
        break;
      case 6:
        temp = temp * 1000000;
        unit = 'megabytes';
        break;
      case 7:
        temp = temp * 1000000000;
        unit = 'gigabytes';
        break;
      case 8:
        temp = temp * 1000000000000;
        unit = 'terabytes';
        break;
      default:
        break;
    }
  }

  data();

  response.measure = 'data';
  response.unit = unit;
  //bytes
  response.result['b'] = temp;
  //Kibi
  response.result['kib'] = temp / 1024;
  //Mebi
  response.result['mib'] = temp / 1048576;
  //Gibi
  response.result['gib'] = temp / 1073741824;
  //Tebi
  response.result['tib'] = temp / 1099511628000;
  //Kilo
  response.result['kb'] = temp / 1000;
  //Mega
  response.result['mb'] = temp / 1000000;
  //Giga
  response.result['gb'] = temp / 1000000000;
  //Tera
  response.result['tb'] = temp / 1000000000000;

  return response;
};

module.exports = router;
