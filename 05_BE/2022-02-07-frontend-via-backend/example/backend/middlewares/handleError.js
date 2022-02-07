const handleError = (error, req, res, next) => {
    console.error(error);
    res.status(500).end();
};

module.exports = handleError;
