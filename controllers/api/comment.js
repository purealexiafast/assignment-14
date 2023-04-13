const router = require("express").Router()
const { Comment } = require("../../models")
const withAuth = require("../../utils/auth")

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId
        })
        console.log("new Comment ", newComment)
        res.json(newComment)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router