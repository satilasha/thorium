const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "swati-ghosh");
    console.log(decodedToken)
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    next()
  } catch (error) { res.send(error.message) }
}



const authorisation = async function (req, res, next) {
  let userToBeModified = req.params.userId
  let token = req.headers["x-auth-token"]
  let decodedToken = jwt.verify(token, "swati-ghosh")
  let userLoggedIn = decodedToken.userId
  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  next()
}


const checkUser = async function (req, res, next) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  next()
}
module.exports.checkUser = checkUser
module.exports.authorisation = authorisation
module.exports.authentication = authentication