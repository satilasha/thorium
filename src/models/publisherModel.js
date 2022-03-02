const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    
    publisher_Name: String,
    headQuaters : String

}, { timestamps: true });


module.exports = mongoose.model('Publisher', publisherSchema)
