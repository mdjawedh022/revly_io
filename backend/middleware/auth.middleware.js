const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // jwt.verfy(token, "revly");
    const decoded = jwt.verify(token, "revly");
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    } else {
      res.send({ msg: "Please Login First😔" });
    }
  } else {
    res.send({ msg: "Please Login First😔" });
  }
};
module.exports = {
  auth,
};
