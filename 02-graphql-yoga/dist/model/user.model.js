"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  email: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  password: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  age: {
    type: _mongoose.Schema.Types.Number,
    required: true
  }
}, {
  versionKey: false
});
var UserModel = (0, _mongoose.model)("User", userSchema);
var _default = UserModel;
exports["default"] = _default;
//# sourceMappingURL=user.model.js.map