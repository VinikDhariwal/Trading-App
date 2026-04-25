const { model } = require("mongoose");

const {OrdersModel, OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = {OrdersModel};