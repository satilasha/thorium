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
        "bookings": [1,2]
    },
]


    
    let pname = "manish"
    let bookingNumber = 4
    const index = players.findIndex(object => object.name === pname)
    if(index === -1){
        console.log('playerdoesnotexists')
    }
    else{
    let a = players[index].bookings
    const i = a.findIndex(object => object.bookingNumber === bookingNumber)
    console.log(i)
        if(i === -1){
            a.push(bookingNumber)
           
            console.log(players[index])
           
        }
        else{
            console.log("booking exists")
        }
    }


