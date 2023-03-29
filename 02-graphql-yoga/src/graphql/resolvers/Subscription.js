const Subscription = {
    count: {
        subscribe: (_, args, { pubsub }) => {
            return pubsub.subscribe("COUNTER_CHANNEL");
        }
    },
    postSub: {
        subscribe: (_, args, { pubsub }) => pubsub.subscribe("POST_CHANNEL")
    }
}

export { Subscription };