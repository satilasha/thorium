let axios = require("axios")

let londonWeather = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=67ca4a0281bb2ec304cb988fde11a08a'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let londonTemperature = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=67ca4a0281bb2ec304cb988fde11a08a'
        }
        let result = await axios(options);
        console.log(result)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let Temperature = async function (req, res) {
    try {  
        let sortedTemp = []
        let cities = ["London","Mumbai","Delhi","Bengaluru","Kolkata","Chennai","Moscow"]
        for(let i =0;i<cities.length;i++){
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=67ca4a0281bb2ec304cb988fde11a08a`
        }
        let result = await axios(options);
        let obj = {}
        obj.city = result.data.name,
            obj.temp = result.data.main.temp
        sortedTemp.push(obj)
    }
        sortedTemp.sort(function (a, b) {
            if (a.temp < b.temp) return -1
            if (a.temp > b.temp) return 1
            if (a.temp = b.temp) return 0

        })
        res.status(200).send(sortedTemp)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.londonWeather = londonWeather
module.exports.londonTemperature = londonTemperature
module.exports.Temperature = Temperature