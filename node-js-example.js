// include http module in the file
var http = require('http');
 
// create a server listening on 8087
http.createServer(function (req, res) {
    // write the response and send it to the client
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('JalalSay hi!');
    res.end();
}).listen(9051);
