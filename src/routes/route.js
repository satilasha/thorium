const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// create author
router.post('/createAuhtor', controller.createAuthor)

// create blog
router.post('/createBlog', controller.createBlog)


router.get('/getAllBlogs', controller.getBlog)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;