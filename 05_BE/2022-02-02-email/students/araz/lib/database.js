const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("connected to database");
}).catch(error => {
    console.error(error);
    process.exit(1);
});
