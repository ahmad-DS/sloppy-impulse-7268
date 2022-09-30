const express = require("express");
const mongoose = require("mongoose");
const passport = require("./google auth/auth");

require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/login",(req,res)=>{
  res.send("login")
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect('/login');
  });

app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("sucessfully connected to DB");
  } catch {
    console.log("failed to connected to DB");
  }
  console.log("i am 8080");
});


