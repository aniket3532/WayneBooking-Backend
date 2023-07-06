const User = require('../../models/user');

const deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
    }
    catch(err){
        next(err);
    }
}

module.exports = deleteUser;