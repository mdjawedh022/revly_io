const mongoose=require("mongoose");

const DoubtSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    subject: { type: String, require: true },
    doubt: { type: String, require: true },
    date: { type: String, default: new Date().toLocaleString },
  },
  {
    versionKey: false,
  }
);

const DoubtModel=mongoose.model("doubt",DoubtSchema)

module.exports={
    DoubtModel
}