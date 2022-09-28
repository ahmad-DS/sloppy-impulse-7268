const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/users.routes");
require('dotenv').config()
const app = express();
app.use(express.json());
app.use("/user",userRoute)
app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("sucessfully connected to DB");
  } catch {
    console.log("failed to connected to DB");
  }
  console.log("i am 8080");
});
