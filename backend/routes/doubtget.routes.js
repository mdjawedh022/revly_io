const express = require("express");
const { DoubtModel } = require("../model/doubt.model");

const doubtgetRouter = express.Router();

// GET endpoint to retrieve all doubts
doubtgetRouter.get("/get", async (req, res) => {
  try {
    const doubts = await DoubtModel.find();
    res.send(doubts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = {
  doubtgetRouter,
};
