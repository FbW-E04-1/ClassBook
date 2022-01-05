function errorHandler (error,req,res,next) {
    console.log(error)
    res.status(500).end("Server side Error!!!")
}

module.exports = errorHandler