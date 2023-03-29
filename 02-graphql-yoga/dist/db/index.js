"use strict";

var _mongoose = require("mongoose");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _process$env = process.env,
  mongoUser = _process$env.mongoUser,
  mongoPassword = _process$env.mongoPassword;
var mongoURI = "mongodb+srv://".concat(mongoUser, ":").concat(mongoPassword, "@cluster0.e9xsq.mongodb.net/optum-db");
(0, _mongoose.connect)(mongoURI).then(function (conn) {
  return console.log("Mongo Connected");
})["catch"](console.error);
//# sourceMappingURL=index.js.map