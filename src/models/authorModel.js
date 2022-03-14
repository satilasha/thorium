const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
