const authorModel= require("../models/authorModel")
const blogModel = require('../models/blogModel')
const emailCheck = require('email-validator');
const { reset } = require("nodemon");
var ObjectId = require('mongoose').Types.ObjectId;


const createAuthor = async function(req,res){
    try{
        let data = req.body;
    let mailCheck = emailCheck.validate(data.email)
    if(!mailCheck){ return res.status(400).send({error: "email not correct"})}
    
    let savedData = await authorModel.create(data)
    res.status(200).send({author : savedData})
} catch(error){
    res.send({Error: error.message})
}
    
}

const createBlog = async function(req,res){
    try{
        
        let data = req.body;
        if(data.keys.length == 0){return res.status(400).send({error:"Bad request"})}
      
        let author = await authorModel.findById(data.authorId);
        if(!author) {return res.status(400).send({error:"Bad Request"})}
        let savedData = await blogModel.create(data);
        return res.status(200).send({Blog: savedData})

    }
    catch(error){
        res.send({Error: error.message})
    }
}

const getBlog = async function(req,res){
    let sdata = req.query;
    let result = await blogModel.find({isDeleted: false, isPublished: true, sdata})
    res.send({msg : result})
}


module.exports.createAuthor= createAuthor;
module.exports.createBlog = createBlog;
module.exports.getBlog = getBlog;
