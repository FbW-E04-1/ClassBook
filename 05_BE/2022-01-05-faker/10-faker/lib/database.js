import dotenv from "dotenv";
dotenv.config();

import mongodb from 'mongodb';
const { MongoClient } = mongodb;

// to close the connection from seed.js, we want to export the client
// in seed.js we can then call client.close()
export const client = await MongoClient.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// database is an optional parameter
const database = 'online_magazine'
export const db = client.db();
//const db = client.db();

// since we already have two named exports we do not need to provide an additional default export
