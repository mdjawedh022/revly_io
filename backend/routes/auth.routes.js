const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { AuthModel } = require("../model/auth.model");

const authRouter=express.Router();

authRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;

    try{
        bcrypt.hash(password,4,async(err,hash)=>{
          const user=new AuthModel({name,email,password:hash});
          await user.save();
          res.send({msg:"user has been registered!"});
        })
    }catch(err){
        res.send({msg:"smething went wrong"});
        console.log(err);
    }
})

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "revly");
          res.cookie("token",token).send({
            msg: "Login Successful",
            token: token,
            user: user[0].name,
          });
        } else {
          res.send({ msg: "Wrong Credential!" });
        }
      });
    } else {
      res.send({ msg: "wrong Credential", err: err.message });
    }
  } catch (err) {
    res.send({ msg: "Something went Wrong", err: err.message });
  }
});
module.exports={
    authRouter
}