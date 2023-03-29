"use strict";

var _express = _interopRequireDefault(require("express"));
var _graphqlYoga = require("graphql-yoga");
var _schema = require("@graphql-tools/schema");
var _schema2 = _interopRequireDefault(require("./graphql/schema"));
var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));
require("./db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var schema = (0, _schema.makeExecutableSchema)({
  typeDefs: _schema2["default"],
  resolvers: _resolvers["default"]
});
var pubsub = (0, _graphqlYoga.createPubSub)();
var yoga = (0, _graphqlYoga.createYoga)({
  schema: schema,
  context: function context(_ref) {
    var req = _ref.req,
      res = _ref.res;
    var authHeader = req.headers["authorization"]; // "Bearer tokenValue"
    var token = null;
    if (authHeader) {
      token = authHeader.split(" ")[1]; //["Bearer", "tokenValue"]
    }

    return {
      token: token,
      pubsub: pubsub
    };
  }
});
app.use("/graphql", yoga);
app.listen(4001, function () {
  return console.log("Server running on PORT : 4001");
});

// http://localhost:4001/graphql
//# sourceMappingURL=server.js.map