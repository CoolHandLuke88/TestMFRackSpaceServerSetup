var http = require('http');

http.createServer(function (req, res) {
	
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Luke You updated This Biatch!!\n');

}).listen(8124, "162.242.170.83");

console.log('listening to server at 162.242.170.83');