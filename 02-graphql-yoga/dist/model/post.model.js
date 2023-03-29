"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var postSchema = new _mongoose.Schema({
  title: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  body: {
    type: _mongoose.Schema.Types.String,
    required: true
  },
  author: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  }
});
var PostModel = (0, _mongoose.model)("Post", postSchema);
var _default = PostModel;
exports["default"] = _default;
//# sourceMappingURL=post.model.js.map