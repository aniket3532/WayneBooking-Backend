const Room = require('../../models/room');

const updateRoomAvailability = async (req, res, next) => {
    try{
        await Room.updateOne({"roomNumbers._id": req.params.id}, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            }
        })
        res.status(200).json("Room has been updated");
    }
    catch(err){
        next(err);
    }
}

module.exports = updateRoomAvailability;