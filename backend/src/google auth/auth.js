const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const userModel = require("../model/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://stormy-harbor-09503.herokuapp.com/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let email = profile._json.email;

      const user = new userModel({
        email,
        password: uuidv4(),
      });

      await user.save();
      const { _id, password } = user;
      const payload = {
        email,
        _id,
        password,
        url: profile._json.picture,
      };

      return cb(null, payload);
    }
  )
);

module.exports = passport;
