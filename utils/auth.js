function withauth(req, res, next) {

    console.log("loggedIn: ", req.session.loggedIn)
    if (!req.session.loggedIn) {
        res.redirect("/login")
    } else {
        next()
    }
}




module.exports = withauth