var http = require("http");
var url=require("url");

const sever=http.createServer(requestHandler);

const port = 8080;
sever.listen(port);

 console.log('you are listening to +port')


function requestHandler (req, res) {
  
    res.write('<h1>Hello World</h1>');
    
    let parseUrl=url.parse(req.url,true)

    let query=parseUrl.query
    
    res.write('key1'+ query.Key1)
    res.write('key2'+ query.Key2)
    console.log()
    res.end();
  }

 
