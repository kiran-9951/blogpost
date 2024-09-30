const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(username, email, password )

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: `${email} ${username} ${password} are required` });
    }

    const user = await users.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ message: "user  already exists with emailId try another" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new users({
      username,
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(400).json({ message: "Failed to save user" });
    }
    res.status(200).json({
      message: "registered successfully",
      status: "success",
      data: savedUser,
    });
  } catch (error) {
    console.error("internal error", error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email, password);

    if (!email || !password) {
      res.status(400).json({ message:"all fields  are required" });
    }

    const user = await users.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not exist with this emailId" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "password mismatched enter correct password" });
    }

    const token = await jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "secretKey123",
      {
        expiresIn: "100d",
      }
    );
    res.status(200).json({
      message: "logged  in successfully",
      status: "success",
      token,
      data: user,
    });
  } catch (error) {
    console.error("internal error", error);
  }
};

module.exports = { signup, login };
