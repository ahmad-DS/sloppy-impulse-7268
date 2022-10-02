const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  current_weight: { type: Number },
  target_weight: { type: Number },
  gender: { type: String },
  date_of_birth: { type: String },
  age: { type: Number },
  height: { type: Number },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
