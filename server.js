const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const apiHandler = require('./netlify/functions/api').handler;

let PORT = 5050;
const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

const server = http.createServer(async (req, res) => {
  // Route /api/* to the serverless function handler
  if (req.url.startsWith('/api/') || req.url.split('?')[0] === '/api') {
    let rawBody = '';
    req.on('data', chunk => { rawBody += chunk; });
    req.on('end', async () => {
      try {
        const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        const queryStringParameters = {};
        parsedUrl.searchParams.forEach((v, k) => { queryStringParameters[k] = v; });

        const event = {
          httpMethod: req.method,
          path: parsedUrl.pathname,
          headers: req.headers,
          queryStringParameters,
          body: rawBody || null
        };

        const result = await apiHandler(event, {});
        res.writeHead(result.statusCode || 200, result.headers || { 'Content-Type': 'application/json' });
        res.end(result.body || '');
      } catch (err) {
        console.error('API Error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Internal Server Error' }));
      }
    });
    return;
  }

  // Static files
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
    console.log(`\n✓ PW Premium Hub Dual-Engine Server live at: http://localhost:${port}`);
    console.log(`✓ API Endpoints active at: http://localhost:${port}/api/*`);
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
