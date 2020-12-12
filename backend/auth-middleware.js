const jwt = require("jsonwebtoken");
const config = require("./config.json");

module.exports = function (req, res, next) {
  let token = req.headers["authorization"];
  console.log(req.headers["authorization"]);
  if (token) {
    console.log("tokennn");
    try {
      jwt.verify(token, config.app_secret);
      next();
      console.log("next");
      return;
    } catch (err) {
      res.statusCode = 401;
      return res.json({ error: err });
    }
  }
};
