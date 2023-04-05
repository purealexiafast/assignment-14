const router = require("express").Router()
const homeRoutes = require("./homeroutes")
const apiRoutes = require("./api")
const adminRoutes = require("./adminroutes")



router.use(homeRoutes)
router.use("/api", apiRoutes)
router.use("/dashboard", adminRoutes)



module.exports = router