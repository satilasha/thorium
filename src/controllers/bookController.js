const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(book.author_id){
        let validAuthor = await authorModel.findOne({ _id:book.author_id})
       if(validAuthor && book.author_id == validAuthor._id){
           if(book.publisher_id){
            let validPublisher = await publisherModel.findOne({_id:book.publisher_id})
               if(validPublisher && book.publisher_id == validPublisher._id){
                let bookCreated = await bookModel.create(book)
                res.send({data: bookCreated})

               }else{
                res.send({msg: "not a valid publisher"})
               }
           }else{
            res.send({msg: "publisher not found"})
           }
       }else{
        res.send({msg: "not a valid author"})
       }
    }else{
        res.send({msg: "author not found"})
    }
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
