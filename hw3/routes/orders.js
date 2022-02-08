//CS 341 Anna Yrjanson
var express = require('express');
var router = express();
router.use(express.json());
const jsonFile = require('../orderData.json');

router.post('/', function(req, res, next) {
    res.send(JSON.stringify(jsonFile));
});
router.get('/', function(req, res, next) {
    res.send(JSON.stringify(jsonFile));
});

module.exports = router;