const authPayload = (req, res, next) => {
   const payload = {
       userId:req.body.userId,
       email:req.body.email,
       password:req.body.password,
    
   }
   next(payload)
}

module.exports = authPayload