import dotenv from "dotenv";
dotenv.config();

import mongodb from 'mongodb';
const { MongoClient } = mongodb;

const client = await MongoClient.connect(
    process.env.MONGODB_URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

// database is an optional parameter
const database = 'online_magazine'
const db = client.db(database);
//const db = client.db();

export default db;
