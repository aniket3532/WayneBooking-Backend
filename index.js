//import Express from "express";
const authRoute = require("./routes/auth.js")
const hotelsRoute = require("./routes/hotels.js")
const roomsRoute = require("./routes/rooms.js")
const usersRoute = require("./routes/users.js")
const Express = require("express");
const app = Express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to DB.")
    }
    catch(error){
        throw(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected!")
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(Express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,    
        message: errorMessage,
        stack: err.stack
    });
})


app.listen(8080, () => {
    connect()
    console.log("Server listening on port 8080...");
})

