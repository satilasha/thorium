const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
      return res.status(400).send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.decode(token, "swati-ghosh");
    console.log(decodedToken)
    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "token is invalid" })
    }
    next()
  } catch (error) { res.status(500).send(error.message) }
}



const authorisation = async function (req, res, next) {
  try {
    let userToBeModified = req.params.userId
    if (!userToBeModified)
      res.status(400).send({ msg: "BAD REQUEST" })
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "swati-ghosh")
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn)
      return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    next()
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
}


const checkUser = async function (req, res, next) {
  try {
    let userId = req.params.userId;
    if (!userId)
      res.status(400).send({ msg: "BAD REQUEST" })
    let userDetails = await userModel.findById(userId)
    if (userDetails)
      next()
    return res.status(404).send({ status: false, msg: "No such user exists" });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
}
module.exports.checkUser = checkUser
module.exports.authorisation = authorisation
module.exports.authentication = authentication