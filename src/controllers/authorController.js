const AuthorModel = require("../models/authorModel")
const BlogModel = require("../models/blogModel")


const createAuthor = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length == 0)
            return res.status(400).send({ status: false, msg: "No data to create author" })

        let duplicateEmail = await AuthorModel.findOne({ email: data.email })
        if (duplicateEmail)
            return res.status(400).send({ status: false, msg: "email is already present" })

        let savedData = await AuthorModel.create(data)
        return res.status(201).send({ status: true, msg: savedData })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports.createAuthor = createAuthor