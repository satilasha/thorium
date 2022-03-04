const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const address = require('address');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://swatighosh:xp6qTS50QcDh1rSZ@cluster0.bddkl.mongodb.net/swatighosh-db?retryWrites=true&w=majority",{useNewUrlParser: true})
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))


    app.use (
        function (req,res,next){
            let currentDate = new Date()
            let Ip = req.socket.remoteAddress
            console.log(currentDate,Ip,req.originalUrl)
            next()
        }
    )




app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
