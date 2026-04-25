const { model } = require("mongoose");

const {PositionsModel, PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new model("Position", PositionsSchema);

module.exports = {PositionsModel};