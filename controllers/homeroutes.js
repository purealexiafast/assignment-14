const router = require("express").Router()
const { Post, Comment, User } = require("../models")

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]


        })
        const posts = postData.map(post => post.get({ plain: true }))

        console.log(("here are the posts ", posts));
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

router.get("/post/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User]
                }
            ]
        })
        if (postData) {
            const post = postData.get({
                plain: true
            })
            console.log(post)
            res.render("singlepost", {
                post
            })
        } else {
            res.status(404).json("This post was not found.")
        }

    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router