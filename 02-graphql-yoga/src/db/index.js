import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const { mongoUser, mongoPassword } = process.env;

const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.e9xsq.mongodb.net/optum-db`;

connect(mongoURI)
    .then(conn => console.log("Mongo Connected"))
    .catch(console.error)