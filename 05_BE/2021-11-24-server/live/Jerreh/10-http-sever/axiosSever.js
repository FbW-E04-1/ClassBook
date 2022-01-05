import http from "http"
import axios from "axios";

const sever = http.createServer(requestHandler);
sever.listen(9000)
 
   async function requestHandler(req, res) {
     try {
       const response = await axios.get("http://localhost:8000");
       let person = response.data;
       res.write("<pre>");
       res.write(`name:${person.name} ${person.lastName}`);
       res.end();
       console.log(person);
     } catch (error) {
       console.error(error);
     }
   

 }
