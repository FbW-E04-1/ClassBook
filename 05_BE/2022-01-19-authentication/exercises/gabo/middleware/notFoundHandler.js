const notFoundHandler = (req, res, next) => {
    console.error(req.method, req.path, "404 - not found");
    res.status(404).send("not found");
};

module.exports = notFoundHandler;
