const http = require('http');

http.createServer((req, res) => {
	res.write('Kareerudayar Thunai');
	res.end();
}).listen(5000, () => console.log('Server running..'));