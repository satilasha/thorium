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

const hardCover = async function (req,res){
    let publisherId = await publisherModel.find({publisher_Name : {$in:["Penguin","HarperCollins"]}})
    let match = []
    for(let i = 0;i<publisherId.length;i++)
    match.push(publisherId[i]._id)
    let books = await bookModel.updateMany(
        {publisher_id:{$in:match}},
        { $set: { hardCover: true}},
        {$new:true}
        )


    res.send({data:books})
}

const ratings = async function (req,res){
    let ratings = await authorModel.find({ratings : {$gt: 3.5}})
    let match = []
    for(let i = 0;i<ratings.length;i++)
    match.push(ratings[i]._id)
     let newbooks = await bookModel.updateMany(
        {author_id:{$in:match}},
        { $inc: { price : 10}},
        {$new:true}
        )
    let bookee = await bookModel.find({author_id:{$in:match}})

    res.send({data:bookee})
}

module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.hardCover= hardCover
module.exports.ratings= ratings