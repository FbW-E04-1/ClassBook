require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGO_URI,
	
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
	  if (!err) {
		console.log("connected to database");
	  } else {
		console.log(`error connected to the database ${err} `);
	  }
	}
);
	