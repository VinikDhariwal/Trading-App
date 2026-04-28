require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    const existingHolding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + Number(qty);
        const totalCost = existingHolding.avg * existingHolding.qty + price * qty;
        const newAvg = totalCost / totalQty;

        await HoldingsModel.findOneAndUpdate(
          { name },
          { qty: totalQty, avg: newAvg }
        );
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty: Number(qty),
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%",
          isLoss: false,
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (existingHolding) {
        const remainingQty = existingHolding.qty - Number(qty);

        if (remainingQty <= 0) {
          await HoldingsModel.findOneAndDelete({ name });
        } else {
          await HoldingsModel.findOneAndUpdate(
            { name },
            { qty: remainingQty }
          );
        }
      }
    }

    res.send("Order Saved");
  } catch (err) {
    console.log("Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });