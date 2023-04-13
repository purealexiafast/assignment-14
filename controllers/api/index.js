const router = require("express").Router()
const userRoutes = require("./userroutes")
const postRoutes = require("./postroutes")
const commentRoutes = require("./comment")

router.use("/user", userRoutes)
router.use("/post", postRoutes)
router.use("/comment", commentRoutes)





module.exports = router