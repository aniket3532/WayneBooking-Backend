const express = require('express');
const createError = require('../utils/error');
const createRoom = require('../controllers/room/create');
const getRoom = require('../controllers/room/get');
const updateRoom = require('../controllers/room/update');
const deleteRoom = require('../controllers/room/delete');
const getRooms = require('../controllers/room/getAll');
const verifyAdmin = require('../utils/verifyAdmin');

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET 
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

module.exports = router;