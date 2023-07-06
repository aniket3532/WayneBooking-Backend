const Room = require('../../models/room');

const getRooms = async (req, res, next) => {
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }
    catch(err){
        next(err);
    }
}

module.exports = getRooms;