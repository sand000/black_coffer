// dependency import
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// data import
const { Connection } = require("./Config/db");
const {DataModel} = require("./Models/Data.model");
const { DataRoute } = require('./Routes/Data.route');

const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8080

// data
app.use("/", DataRoute)

// listening on port 8080
app.listen(PORT, async()=>{
    try{
        await Connection
        console.log("connected to db")
    }catch(err){
        console.log("err in connecting to db")
        console.log(err)
    }
       console.log(`http://localhost:${PORT}`)
})