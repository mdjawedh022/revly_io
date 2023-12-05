const express=require("express");
const { DoubtModel } = require("../model/doubt.model");


const doubtRouter=express.Router();

doubtRouter.post('/doubt', async (req, res) => {
  try {
    const { name, subject, doubt ,date} = req.body;

    const newDoubt = new DoubtModel({ name, subject, doubt,date });

    await newDoubt.save();

    res.send({ message: 'Doubt created successfully' });
  } catch (error) {
    console.error(error);
    res.send({ message: 'Internal server error' });
  }
});

module.exports={
    doubtRouter
}