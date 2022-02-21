// CS 341 Anna Yrjasnon
var express = require('express');
var dbms = require('./dbms.js');
var router = express();
router.use(express.json());

router.post('/', function(req, res, next) {
    ORDERID = 66;
    MONTH = "JAN";
    DAY = 20;
    QUANTITY = req.body.QUANTITY;
    TOPPING = req.body.TOPPING;
    NOTES = req.body.NOTES;

    dbms.dbquery("INSERT INTO ORDERS VALUES('" + ORDERID + "','" + MONTH + "','" 
    + DAY + "','" + QUANTITY + "','" + TOPPING + "','" + NOTES + "');",function(){
        return;
    });
});

module.exports = router;
