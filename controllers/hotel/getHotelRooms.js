const Hotel = require("../../models/hotel");
const Room = require("../../models/room");

const getHotelRooms = async (req, res, next) => {
    try {
       const hotel = await Hotel.findById(req.params.id);
       const list = await Promise.all(hotel.rooms.map(room => {
        return Room.findById(room);
       }));
       res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}

module.exports = getHotelRooms;