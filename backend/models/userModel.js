const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

module.exports =mongoose.model("users",userSchema)
