const { MongoClient } = require("mongodb");

// we create an instance of MongoClient that will handle the database connection
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// we connect to the database.
// after connecting, it triggers the callback function.
// if there are any errors, it will log them via console.error.
client.connect(error => {
    if (error) console.error(error);
    console.log("connected to database");
});

// we point to the database with the following line.
// when no argument is provided, client.db() uses the database in the URI.
// we could also set a different database name here, e.g. client.db("other_database").
const db = client.db();

// to make the database available in other places of our app, we export db.
module.exports = db;
