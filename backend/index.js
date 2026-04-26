require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URL;

const app = express();

mongoose.connect(URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("DB Connection Error:", err);
});