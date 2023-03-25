const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

const Connection = mongoose.connect(MONGO_URL);

module.exports = {Connection};