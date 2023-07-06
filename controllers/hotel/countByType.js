const Hotel = require('../../models/hotel');

const countByType = async (req, res, next) => {
    try{
        const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
        const resortCount = await Hotel.countDocuments({ type: "Resort" });
        const villaCount = await Hotel.countDocuments({ type: "Villa" });
        const cabinCount = await Hotel.countDocuments({ type: "Cabin" });

        res.status(200).json([
            { type: "Hotel", count: hotelCount },
            { type: "Apartment", count: apartmentCount },
            { type: "Resort", count: resortCount },
            { type: "Villa", count: villaCount },
            { type: "Cabin", count: cabinCount },
        ]);
    }
    catch(err){
        next(err);
    }
}

module.exports = countByType;