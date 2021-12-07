const express = require("express");
const cors = require("cors");
const app = express();
const sanitizeHtml = require("sanitize-html");

app.listen(3210, () => console.log("server listening on port 3210"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// we use a higher order function to not repeat the same checks over and over again.
// so validate() takes the required values as an argument and returns the middleware.
const validate = (requiredValues) => (req, res, next) => {
    try {
        // since requiredValues is an array, we can use array methods on it.
        // in this case we want to use forEach to iterate over every single element.
        requiredValues.forEach(value => {
            // we check for the existence of the property in the body.
            // by using the array notation (req.body[value]) we can use variables as keys.
            // if the value does not exist, we want to throw an error with the corresponding message.
            if (!req.body[value]) throw new Error(`${value} is required`);
        });
    } catch (error) {
        // we can then catch the error here and send a response to the client.
        return res.status(400).json(error.message);
    }

    // note that we return in the catch part so that next is not called on an error.
    // alternatively we could move next() inside the try part.
    next();
};


// whenever we need to check for required fields in the body, we can now use our validate function.
// since that is a higher order function, we have to call it to get the actual middleware.
app.post("/login", validate(["username", "password"]), (req, res) => {
    if (req.body.username.length > 8) return res.status(400).json(`username is too long`);

    const sanitizedUsername = sanitizeHtml(req.body.username, {
        allowedTags: []
    });

    res.json(`Hello, ${sanitizedUsername}!`);
});



app.post("/tasks", validate(["description", "dueDate"]), (req, res) => {
    res.json(`new task!`);
});
