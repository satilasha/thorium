const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    publisher_id: {
        type: ObjectId,
        ref: "Publisher"
    },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
