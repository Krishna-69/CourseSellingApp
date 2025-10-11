const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config.js");

const userRouter = Router();

userRouter.post("/signup", async function (req, res){
  const { email, password, firstName, lastName } = req.body;
  //TODO: addming zod validation 
  //TODO: has the password so plaintext pw is not stored in the DB

  //TODO: Put inside a try catch block
  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  })

  res.json({ message: "signup endpoint"
  })
})

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  
  //TODO: ideally password should be hashed, and hence you can't compare the user provided password and the database password
  const user = await userModel.findOne({
    email: email,
    password: password
  });

  if (user) {
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD);
  
    //TODO: Do cookie logic
    res.json({
      token: token
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})


userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "my courses"
  })
})

module.exports = {
  userRouter: userRouter
}



