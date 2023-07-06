const Hotel = require('../../models/hotel');
const Room = require('../../models/room');

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull: { rooms: req.params.id }});
        }
        catch(err) {
            next(err);
        }
        res.status(200).json("Room deleted successfully");
    }
    catch(err){
        next(err);
    }
}

module.exports = deleteRoom;