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



















const createUser = async function (req, res) {
    try {
        let data = req.body
        let savedData = await UserModel.create(data)
        res.send({ msg: savedData })

    } catch (error) {
        req.send(error.meassage)
    }
}

const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ data: allUsers })
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
// module.exports.basicCode= basicCode