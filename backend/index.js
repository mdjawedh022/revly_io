const express = require("express");
const { connection } = require("./utils/db");
require("dotenv").config();
const cors = require("cors");
const { authRouter } = require("./routes/auth.routes");
const { auth } = require("./middleware/auth.middleware");
const { doubtRouter } = require("./routes/requestDoubt.routes");
const { doubtgetRouter } = require("./routes/doubtget.routes");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to Revly.io server 😊!");
});
app.use(cors())
app.use(express.json());
app.use("/user", authRouter);
app.use("/api",auth,doubtRouter)
app.use("/api", auth, doubtgetRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connnected to the Database!");
  } catch (err) {
    console.log("Database connection failed!");
  }
  console.log(`server is running at the port ${process.env.port}`);
});
