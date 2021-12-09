// this middleware handles errors that come from next(error).
// every time you call next with an argument, it skips all following middlewares and controllers
// and goes straight to the one that has four parameters: error, req, res, next.
// we can then log the error or notify admins or devs via email, slack,...
// finally we want to respond with status code 500 to tell the client that something went wrong on the server side.
const errorHandler = (error, req, res, next) => {
    console.error("error handling middleware", error);
    res.status(500).end();
};

module.exports = errorHandler;
