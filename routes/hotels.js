const express = require('express');
const createError = require('../utils/error');
const createHotel = require('../controllers/hotel/create');
const getHotel = require('../controllers/hotel/get');
const updateHotel = require('../controllers/hotel/update');
const deleteHotel = require('../controllers/hotel/delete');
const getHotels = require('../controllers/hotel/getAll');
const verifyAdmin = require('../utils/verifyAdmin');
const countByCity = require('../controllers/hotel/countByCity');
const countByType = require('../controllers/hotel/countByType');
const getHotelRooms = require('../controllers/hotel/getHotelRooms');

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET 
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;