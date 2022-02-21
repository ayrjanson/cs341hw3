//CS 341 Anna Yrjanson
var express = require('express');
var router = express();
router.use(express.json());
const jsonFile = require('../orderData.json');
const dbms = require('./dbms.js');

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(jsonFile));
});

router.post('/', function(req, res, next) {
  month = req.body.month;
  console.log("Hello")
  dbms.dbquery("SELECT SUM(QUANTITY) AS qty FROM ORDERS WHERE MONTH = '" + month + "' AND TOPPING = 'Cherry';", function(err, resCherry) {
    console.log(resCherry[0].qty);
    if(resCherry[0].qty == null) qtyCherry = 0
    else qtyCherry = resCherry[0].qty;
  });
  
  dbms.dbquery("SELECT SUM(QUANTITY) AS qty FROM ORDERS WHERE MONTH = '" + month + "' AND TOPPING = 'Plain';", function(err, resPlain) {
    console.log(resPlain[0].qty);
    if(resPlain[0].qty == null) qtyPlain = 0
    else qtyPlain = resPlain[0].qty;
  });
  
  dbms.dbquery("SELECT SUM(QUANTITY) AS qty FROM ORDERS WHERE MONTH = '" + month + "' AND TOPPING = 'Chocolate';", function(err, resChocolate) {
    console.log(resChocolate[0].qty);
    if(resChocolate[0].qty == null) qtyChocolate = 0
    else qtyChocolate = resChocolate[0].qty;
  });
  
  res.send({cherry: qtyCherry, plain: qtyPlain, chocolate: qtyChocolate});
  });
  
  module.exports = router;