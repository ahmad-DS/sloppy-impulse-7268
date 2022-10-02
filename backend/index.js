const express = require("express");
const mongoose = require("mongoose");
const passport = require("./src/google auth/auth");
const userRoute = require("./src/routes/users.routes");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

app.get("/dashbord", (req, res) => {
  res.send("dashbord");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect("/dashbord");
  }
);

app.use("/user", userRoute);

app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("sucessfully connected to DB");
  } catch {
    console.log("failed to connected to DB");
  }
  console.log("i am 8080");
});
