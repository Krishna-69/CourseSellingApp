const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");
const {JWT_ADMIN_PASSWORD} = require("../config");

adminRouter.post("/signup", async function(req, res) {
  const { email, password, firstName, lastName } = req.body;
  //TODO: adding zod validation
  //TODO: hash the password so plaintext pw is not stored in the DB

  //TODO: Put inside a try catch block
  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  })

  res.json({
    message: "singup endpoint"
  })
})

adminRouter.post("/signin", async function(req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password
  })

  if (admin) {
    const token = jwt.sign({
      id: admin._id
    }, JWT_ADMIN_PASSWORD);

    res.json({
      token: token
    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

adminRouter.post("/course", adminMiddleware, async function(req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;

  //TODO: using pipline for image url for harkirat creating web3 saas in 6 hrs
  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId
  })

  res.json({
    message: "Course created",
    courseId: course._id
  })
})

adminRouter.put("/course", function(req, res) {
  res.json({
    message: "Courses"
  })
})

adminRouter.get("/course/bulk", function(req, res) {
  res.json({
    message: "All courses in bulk!"
  })
})

module.exports = {
  adminRouter: adminRouter
}
