const router = require("express").Router()
const { User } = require("../../models")

router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        req.session.save(() => {
            req.session.userId = newUser.id
            req.session.userName = newUser.userName
            req.session.loggedIn = true
        })
        res.json(newUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router