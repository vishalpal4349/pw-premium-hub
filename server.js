const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let PORT = 5050;
const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  const reqUrl = req.url.split('?')[0];
  const filePath = path.join(__dirname, reqUrl === '/' ? 'index.html' : reqUrl);
  const ext = path.extname(filePath);
  const contentType = mime[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

function start(port) {
  server.listen(port, () => {
    console.log(`\n✓ Website is live at: http://localhost:${port}`);
    exec(`start http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} busy, trying ${port + 1}...`);
      start(port + 1);
    } else {
      console.error(err);
    }
  });
}

start(PORT);
