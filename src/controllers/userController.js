const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
};



const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    if (!userName || !password)
      return res.status(401).send({ status: false, msg: "username or the password is not entered" });
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({ status: false, msg: "username or the password is not corerct" });
    let token = jwt.sign({ userId: user._id.toString(), }, "swati-ghosh");
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
}


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId)
    if (userDetails)
      res.status(200).send({ status: true, data: userDetails });
    return res.status(404).send({ error: "user data not found" });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
};


async function updateUser(req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    if (Object.keys(userData).length == 0)
      res.status(400).send({ error: "update details not found" });
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: userData },
      { new: true });
    res.status(200).send({ status: "updated", data: updatedUser });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
}


const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let deletedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: true } },
      { new: true });
    res.status(200).send({ status: "deleted", data: deletedUser });
    if (!deletedUser)
      res.status(404).send({ msg: "user not found" });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
};


const updatePost = async (req, res) => {
  try {
    let userId = req.params.userId;
    let message = req.body.message
    if (!message)
      res.status(400).send({ error: "update post not found" });
    let user = await userModel.findByIdAndUpdate(
      { _id: userId },
      { $addToSet: { posts: message } },
      { new: true });
    res.status(200).send({ status: "updated", data: user });
    if (!user)
      res.status(404).send({ msg: "user not found" });
  } catch (Error) {
    res.status(500).send({ msg: "error", error: Error.message })
  }
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.loginUser = loginUser;
module.exports.updatePost = updatePost




// {
//   "status": true,
//   "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI3NTA4ZTkwNGY0NThjZGNkNTBhMzgiLCJpYXQiOjE2NDY3NDQxMDh9.cbAcWyGptUroN9E8SOEqn7LAgD3BIyJRlAwFhM5sf5Q"
// }