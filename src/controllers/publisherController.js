const PublisherModel= require("../models/publisherModel")

const createPublisher = async function (req, res) {
    let author = req.body
    let authorCreated = await PublisherModel.create(author)
    res.send({data: authorCreated})
}



module.exports.createPublisher= createPublisher
