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

router.get("/editpost/:id", withauth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User

            ]

        })

        if (postData) {
            const post = postData.get({
                plain: true
            })
            console.log(post)
            res.render("editpost", {
                post,
                loggedIn: req.session.loggedIn
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