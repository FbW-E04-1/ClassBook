const express=require('express')
const port = process.env.PORT;
const server = express();
server.listen(port, () => console.log(`server is running ${port}`));

/*const userControler=require ()

const router=express.Router()
Router.post('/register',userControler.register)
*/
server.use('/user',(req,res)=>{
   console.log('Welcome to Users Port');
   res.send('this is the users area')
})


