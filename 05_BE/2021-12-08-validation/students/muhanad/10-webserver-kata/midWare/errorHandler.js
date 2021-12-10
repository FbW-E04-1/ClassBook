function errorHandler (error,req,res,next){
    console.log(error);
    res.status(500).end("server error")
}

module.exports = errorHandler;