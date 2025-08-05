
const http = require('http');
http.createServer((req, res) => {
  res.end("Hello from Backend API!");
}).listen(5000, '0.0.0.0');
