import dotenv from "dotenv";
dotenv.config();

import mongodb from "mongodb";
const { MongoClient } = mongodb;

// Die Verbindung zu MongoDB stellen wir mittels MongoClient her und nutzen dafür die eigene URI aus der Environment
const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Wir legen mit .db() die Datenbank fest...
const db = client.db("online_magazine");

// ...und exportieren diese anschließend für die weitere Verwendung
export default db;
