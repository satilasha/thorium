const express = require('express');
const router = express.Router();


let players =  [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "bookings": [
            {
                "bookingNumber": 1,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286598000000',
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021'
            },
            {
                "bookingNumber": 2,
                "sportId": "",
                "centerId": "",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            },
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
        "bookings": []
    },
]

router.post("/player", function(req, res) {
    let ele = req.body.name
    const index = players.findIndex(object => object.name === ele)
       if(index === -1){
      players.push(req.body)
        }
        else{
            res.send("player exists")
        }
    res.send(  { players }  )
       
})

router.post("/players/:playerName/bookings/:bookingId", function(req, res) {
    let play = req.params.playerName
    let book =req.params.bookingId
    
    const index = players.findIndex(object => object.name === play)
    if(index === -1){
        res.send('player does not exists')   
    }

    else{
    let a = players[index].bookings
    const i = a.findIndex(object => object.bookingNumber == book)
        if(i === -1 ){
            a.push(req.body)
            res.send(  players[index] )
           
        }
        else{
            res.send("booking exists")
        }
    }

       
})

module.exports = router;