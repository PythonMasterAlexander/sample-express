const express = require('express');
const server = express();
const url = 'hello';
const port = 3000;

server.get(`/${url}`, function(req, res) {
	res.send('Hello World');
});

server.listen(port, function () {
	console.log(`Server running on http://localhost:${port}/${url}`);
});
