const http = require('http');
const hostname = 'localhost';
const port = 3200;
const now = new Date();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hola Mundo Sindy Yohana Rojas Celis!\n");
  res.write("Fecha del servidor: " + now.toGMTString());
  res.end('hasta luego...\n');
});

server.listen(port, hostname, () => {
  console.log(`el servidor esta corriendo por   http://${hostname}:${port}/`);
});