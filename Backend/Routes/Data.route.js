const {Router} = require('express');
const { DataModel } = require("../Models/Data.model");

const DataRoute = Router();

DataRoute.get("/", async(req, res)=>{
    const data = await DataModel.find({})
    console.log("data",data)
    res.send(data);
})
DataRoute.get("/", async(req, res)=>{
    let {end_year} = req.query;
    const data = await DataModel.find({end_year: end_year})
    console.log("data",data)
    res.send(data);
})

// topic filter 
DataRoute.get("/", async(req, res)=>{
    let {topic} = req.query;
    const data = await DataModel.find({topic: topic})
    console.log("data",data)
    res.send(data);
});

//  sector filter
DataRoute.get("/", async(req, res)=>{
    let {sector} = req.query;
    const data = await DataModel.find({sector: sector})
    console.log("data",data)
    res.send(data);
});

// region filter
DataRoute.get("/", async(req, res)=>{
    let {region} = req.query;
    const data = await DataModel.find({region: region})
    console.log("data",data)
    res.send(data);
});

// source filter
DataRoute.get("/", async(req, res)=>{
    let {source} = req.query;
    const data = await DataModel.find({source: source})
    console.log("data",data)
    res.send(data);
});

// country filter
DataRoute.get("/", async(req, res)=>{
    let {country} = req.query;
    const data = await DataModel.find({country: country})
    console.log("data",data)
    res.send(data);
});

// city filter
DataRoute.get("/", async(req, res)=>{
    let {city} = req.query;
    const data = await DataModel.find({city: city})
    console.log("data",data)
    res.send(data);
});

// PEST filter
// SWOT filter


module.exports = {DataRoute}