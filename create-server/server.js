var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var index = fs.readFile(__dirname + '/index.html', function(error, data) {
		if(error) {
			return error;
		}

		res.end(data);
	});
});

server.listen(3000);