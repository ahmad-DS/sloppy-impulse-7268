const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  current_weight: { type: Number, required: true },
  target_weight: { type: Number, required: true },
  gender: { type: String, required: true },
  date_of_birth: { type: String, required:true },
  height: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;



