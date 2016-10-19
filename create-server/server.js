var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile(__dirname + '/index.html', 'utf8', function(error, data) {
		if(error) {
			return error;
		}
		var name = 'Ninja';
		data = data.replace('{name}', name);
		res.end(data);
	});
});

server.listen(3000);