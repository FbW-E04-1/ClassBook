import  http from 'http';
import url from 'url'

/* var http = require('http'); */

const server = http.createServer(requestHandler) // we are creating a server
server.listen(8080); // the server listen to  this port                                                                                                                                                                                                                                                                                                                                                                                                                                               

function requestHandler(req, res){

    res.write('Hello World!');

    let parsedURL = url.parse(req.url, true);
    let query = parsedURL.query
    
    res.write('key1', query.key1);
	res.write('key2', query.key2);



    res.write('<pre>');
	res.write('key1:' + query.key1 + "\n");
	res.write('key2:' + query.key2);
	res.write('</pre>');
                                     
                       
    res.end();
  }
                                                                                                                                                                                                           