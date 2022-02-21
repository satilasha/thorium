
let obj = require('./logger')
const module1 = require('../logger/logger')
const module2 = require('../util/helper')
const module3 = require('../validator/formatter')
const express = require('express');
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    module1.welcome()
    module2.printDate()
    module2.printMonth('Febuary 22')
    module2.getBatchInfo()
    module3.trim()
    module3.lowerCase()
    module3.upperCase()
    obj.printMessage('thorium')
    console.log(obj.endpoint)
    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
    console.log(lodash.chunk(months,3))
    console.log(lodash.tail(oldNumbers))
    console.log(lodash.union(array1,array2,array3,array4,array5))
    console.log(lodash.fromPairs(paris))
    res.send('My lodash assignment')
});


module.exports = router;
let months = ["January", "February", "March", "April","May","June","July","August","September","October","November","December"]
let oldNumbers =[1,3,5,7,9,11,13,15,17,19]
let array1 =[1,2,3]
let array2 =[2,3,4]
let array3 =[3,4,5]
let array4 =[5,6,7]
let array5 =[6,7,8]
let paris =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

// adding this comment for no reason