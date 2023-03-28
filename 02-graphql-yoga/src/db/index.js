import { connect } from 'mongoose';

const mongoURI = `mongodb+srv://synergy:UCZLeRPIiF9CWo72@cluster0.e9xsq.mongodb.net/optum-db`;

connect(mongoURI)
    .then(conn => console.log("Mongo Connected"))
    .catch(console.error)