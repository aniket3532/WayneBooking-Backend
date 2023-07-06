const User = require('../../models/user');

const getUsers = async (req, res, next) => {
    try{
        const Users = await User.find();
        res.status(200).json(Users);
    }
    catch(err){
        next(err);
    }
}

module.exports = getUsers;