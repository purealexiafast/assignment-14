const router = require("express").Router()
const { Post, Comment, User } = require("../models")

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]


        })
        const posts = postData.map(post => post.get({ plain: true }))
        res.render("allposts", { posts, loggedIn: req.session.loggedIn })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect("/dashboard")
    }
    res.render("signup")
})

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect("/dashboard")
    }
    res.render("login")
})


module.exports = router