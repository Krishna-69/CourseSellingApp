const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db")

adminRouter.post("/signup", function(req, res) {
  res.json({
    message: "singup endpoint"
  })
})

adminRouter.post("/signin", function(req, res) {
  res.json({
    message: "signin endpoint"
  })
})

adminRouter.post("/course", function(req, res) {
  res.json({
    message: "All courses"
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
