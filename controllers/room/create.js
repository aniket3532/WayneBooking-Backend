const Room = require("../../models/room");
const Hotel = require("../../models/hotel");

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id} }); 
        }
        catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }
    catch(err){
        next(err);
    }
}

module.exports = createRoom;