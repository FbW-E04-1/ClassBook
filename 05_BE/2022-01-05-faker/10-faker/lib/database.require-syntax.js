const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

async function init() {
    const client = await MongoClient.connect(
        process.env.MONGODB_URI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    );

    const db = client.db("online_magazine");
    return db;
}

module.exports = init;
