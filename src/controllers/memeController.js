let axios = require("axios")

let getMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.imgflip.com/get_memes'
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

let makeMemes = async function (req, res) {

    try {  
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1


        let options = {
            method: 'post',
            url: `http://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
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


module.exports.getMemes = getMemes
module.exports.makeMemes = makeMemes
