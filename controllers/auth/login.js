const createError = require("../../utils/error");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = bcrypt.compare(user.password, req.body.password);
        if(!isPasswordCorrect) return next(createError(400, "Wrong username or password!"));

        const token = jwt.sign({ id: user._id, isAdmin : user.isAdmin }, process.env.JWT);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, { httpOnly: true, secure: true }).status(200).json({...otherDetails});
    }
    catch(err){
        next(err);
    }
}

module.exports = login;