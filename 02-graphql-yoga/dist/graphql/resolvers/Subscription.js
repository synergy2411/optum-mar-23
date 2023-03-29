"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;
var Subscription = {
  count: {
    subscribe: function subscribe(_, args, _ref) {
      var pubsub = _ref.pubsub;
      return pubsub.subscribe("COUNTER_CHANNEL");
    }
  },
  postSub: {
    subscribe: function subscribe(_, args, _ref2) {
      var pubsub = _ref2.pubsub;
      return pubsub.subscribe("POST_CHANNEL");
    }
  }
};
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map