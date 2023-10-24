var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
var rand =Math.random().toFixed(2);
var y = req.query.x;
if(y == undefined){
 y =rand;
 }
a=Math.atan(rand).toFixed(2);
b=Math.exp(rand).toFixed(2);
c=Math.expm1(rand).toFixed(2);
res.send(`Math.atan(${y}): ${a} Math.exp(${y}) is: ${b} Math.expm1(${y}) is : ${c}`);
 });
module.exports = router;
