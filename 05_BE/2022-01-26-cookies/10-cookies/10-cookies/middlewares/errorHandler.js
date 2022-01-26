const errorHandling = (error, req, res, next) => {
    console.error("ERROR:", error);
    res.status(500).send();
};

module.exports = errorHandling;
