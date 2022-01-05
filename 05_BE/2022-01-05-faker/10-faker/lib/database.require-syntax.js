const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.error('error connecting to database', err)
    } else {
        console.log('connected to database');
    }
    // perform actions on the collection object
});

const db = client.db("online_magazine");

module.exports = db;
