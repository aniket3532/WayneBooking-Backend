const Hotel = require('../../models/hotel');

const getHotels = async (req, res, next) => {

    const { min, max, ...others } = req.query;

    const limiting = parseInt(req.query.limit) || 2;
    try{
        const hotels = await Hotel.find({...others, cheapestPrice: { $gt: min | 1, $lt: max || 999}})//.limit(limiting);
        //console.log(hotels)
        res.status(200).json(hotels);
    }
    catch(err){
        next(err);  
    }
}

module.exports = getHotels;