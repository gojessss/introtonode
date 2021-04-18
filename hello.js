var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (req,res) {
	var q = url.parse(req.url, true);
	console.log(q.pathname);
	var filename = "." + q.pathname;
	if (filename == "./") {filename = "./index";}

	filename = filename + ".html";
	console.log(filename);

	fs.readFile(filename, function(err,data) {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"});
			return res.end("404 Not Found");
		}
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(data);
			return res.end();
		});
}).listen(8080);


console.log("Server Listening on Port 8080...");