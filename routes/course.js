const { Router }= require("express")

const courseRouter = Router();


courseRouter.post("/purchases", function (req, res) {
  res.json({
    message: "Purchases"
  })
})

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "All courses"
  })
})

module.exports = {
  courseRouter: courseRouter
}
