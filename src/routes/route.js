const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const BlogController= require("../controllers/blogController")
const Mw = require("../middleware/auth")





router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/BASE_URL/authors", AuthorController.createAuthor)
router.post("/login", BlogController.loginUser)
router.post("/blogs", Mw.authentication,BlogController.createBlog)
router.get("/blogs", Mw.authentication, BlogController.getBlogs)
router.put("/blogs/:blogId", Mw.authentication, Mw.authorisation, BlogController.updateBlog)
router.delete("/blogs/:blogId", Mw.authentication, Mw.authorisation,BlogController.deleteBlog)
router.delete('/deleteBlog',Mw.authentication,BlogController.deleteWithQuery)




module.exports = router;