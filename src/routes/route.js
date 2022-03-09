const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Mw = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", Mw.authentication,Mw.authorisation,Mw.checkUser,userController.getUserData)

router.put("/users/:userId", Mw.authentication,Mw.authorisation,Mw.checkUser,userController.updateUser)

router.delete("/deleteUser/:userId", Mw.authentication,Mw.authorisation,Mw.checkUser,userController.deleteUser)

router.post("/updatePost/:userId", Mw.authentication,Mw.authorisation,Mw.checkUser,userController.updatePost)
module.exports = router;