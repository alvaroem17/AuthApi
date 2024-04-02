require("dotenv").config();
const connectDB = require("./database/index");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const launchServer = () =>{
    const app = express();

    app.use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routers/index.js"))
    .listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
}

const startApi = async () =>{
    await connectDB();
    launchServer();
}

startApi();