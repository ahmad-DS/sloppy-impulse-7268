const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userModel = require("../model/user.model");
const userRoute = express.Router();

userRoute.post("/signup", (req, res) => {
  let {
    current_weight,
    target_weight,
    gender,
    date_of_birth,
    height,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 6, async function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.send("something went wrong! please try agian");
    } else {
      let user = await userModel.create({
        current_weight,
        target_weight,
        gender,
        date_of_birth,
        height,
        email,
        password:hash,
      });
      res.send({ msg: "Signup sucessfull", user });
    }
  });
});

userRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  let hash = user.password;
  bcrypt.compare(password, hash, function (err, result) {
    // result == false
    if (result) {
      var token = jwt.sign(
        { email: email, userId: user._id },
        process.env.SECRET_KEY
      );
      res.send({ msg: "login sucessfull", token: token, userId: user._id });
    } else {
      res.send("invalid credencial");
    }
  });
});

module.exports = userRoute
