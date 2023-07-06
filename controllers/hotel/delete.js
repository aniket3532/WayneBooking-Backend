const Hotel = require('../../models/hotel');

const deleteHotel = async (req, res, next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted successfully");
    }
    catch(err){
        next(err);
    }
}

module.exports = deleteHotel;