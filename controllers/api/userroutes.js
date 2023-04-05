const router = require("express").Router()
const { User } = require("../../models")

router.post("/", async (req, res) => { //debug
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

router.post("/login", async (req, res) => {

    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    })
    if (!user) {
        res.status(401).json({ message: "No user account." })
        return
    }
    const passwordValid = user.checkPassword(req.body.password)
    if (!passwordValid) {
        res.status(401).json({ message: "Incorrect." })
        return
    }
    req.session.save(() => {
        req.session.userId = user.id
        req.session.userName = user.username
        req.session.loggedIn = true
        res.json(user)
    })

})


module.exports = router