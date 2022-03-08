const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Mw = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", Mw.auth,userController.getUserData)

router.put("/users/:userId", Mw.auth,userController.updateUser)

router.delete("/deleteUser/:userId", Mw.auth,userController.deleteUser)

module.exports = router;