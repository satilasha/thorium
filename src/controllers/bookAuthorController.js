const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const chetanbhagat = async function (req, res) {
    
    let savedData = await AuthorModel.findOne({ author_name : "Chetan Bhagat"}).select({author_id:1})
    let authorid = savedData.author_id
    let books = await BookModel.find({author_id:authorid})
    res.send(books )
}


const authorlist = async function (req, res) {
    let list = await BookModel.findOneAndUpdate(
        { "name": "Two states" }, { $set: { price: 100 } }, { new: true }).select({ price: 1, _id: 0 })
    let author = await AuthorModel.findOne(list)
    let result = {
        authorName : author.author_name
    }
    result.price = list.price 
    res.send(result)

}



const findBook = async function (req, res) {
    let book = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1,name:1 })
    let arr = []
    for(i = 0; i<book.length;i++){
        let obj = {}
        let id = book[i].author_id;
        let authorDetail = await AuthorModel.findOne({author_id:id})
    obj.bookName = book[i].name;
    obj.authorName = authorDetail.author_name;
    arr.push(obj)
    }

    res.send({ msg: arr})
}



module.exports.chetanbhagat = chetanbhagat
module.exports.authorlist = authorlist
module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.findBook = findBook