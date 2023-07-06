const Hotel = require('../../models/hotel');

const updateHotel = async (req, res, next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }
    catch(err){
        next(err);
    }
}

module.exports = updateHotel;