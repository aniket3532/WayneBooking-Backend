const express = require('express');
const createError = require('../utils/error');
const getUser = require('../controllers/user/get');
const updateUser = require('../controllers/user/update');
const deleteUser = require('../controllers/user/delete');
const getUsers = require('../controllers/user/getAll');
const verifyToken = require("../utils/verifyToken");
const verifyUser = require('../utils/verifyUser');
const verifyAdmin = require('../utils/verifyAdmin');

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in!");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello user, you are an Admin!");
// });

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getUsers);


module.exports = router;