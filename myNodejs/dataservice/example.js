var http = require('http');
http.createServer(function (req, res) {
	if(req.url === '/favicon.ico'){
		return;
	}

    console.log("headers: ", req.headers);
    console.log('\n');
	console.log("statusCode: ", res.statusCode);
    console.log('\n\n');
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/\n');