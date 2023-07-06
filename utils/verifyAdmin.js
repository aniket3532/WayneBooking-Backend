const createError = require("./error")
const verifyToken = require("./verifyToken")


const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not an admin!"))
        }
    }) 
}

module.exports = verifyAdmin;
