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
        res.render("admin", { posts })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})


module.exports = router