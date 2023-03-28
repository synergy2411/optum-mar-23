const Mutation = {
    registerUser: (parent, args, context) => {
        const { email, password, age } = args.data;
        console.log(email, password, age);
        return { message: "CREATED", email }
    }
}

export { Mutation }