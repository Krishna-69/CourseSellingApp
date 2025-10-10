const express = require("express");
const mongoose = require("mongoose");
require('@dotenvx/dotenvx').config()
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(3000);
  console.log("Listening on port 3000!")
}


main()
