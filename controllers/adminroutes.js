const router = require("express").Router()
const { Post, User } = require("../models")
const withauth = require("../utils/auth")

router.get("/", withauth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
            where: {
                userId: req.session.userId
            }


        })
        const posts = postData.map(post => post.get({ plain: true }))
        console.log(posts)
        res.render("admin", {
            posts,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

router.get("/createpost", withauth, async (req, res) => {
    res.render("newpost", {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router