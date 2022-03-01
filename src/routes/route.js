const express = require('express');
const router = express.Router();
const BookAuthorController = require("../controllers/bookAuthorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookAuthorController.createBook)
router.post("/createAuthor", BookAuthorController.createAuthor)
router.get("/authorlist", BookAuthorController.authorlist)
router.get("/findBook", BookAuthorController.findBook)
router.get("/chetanbhagat", BookAuthorController.chetanbhagat)
module.exports = router;