const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign( { userId: user._id.toString(),},"swati-ghosh");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId)
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    {$set: userData},
    {new:true});
  res.send({ status: "updated", data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let deletedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    {$set: {isDeleted:true}},
    {new:true});
  res.send({ status: "deleted", data: deletedUser });
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.loginUser = loginUser;




// {
//   "status": true,
//   "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI3NTA4ZTkwNGY0NThjZGNkNTBhMzgiLCJpYXQiOjE2NDY3NDQxMDh9.cbAcWyGptUroN9E8SOEqn7LAgD3BIyJRlAwFhM5sf5Q"
// }