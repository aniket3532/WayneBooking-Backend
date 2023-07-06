const Hotel = require('../../models/hotel');

const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try{
        const list = await Promise.all(cities.map(c => {
            return Hotel.countDocuments({ city: c });
        }))
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    }
}

module.exports = countByCity;