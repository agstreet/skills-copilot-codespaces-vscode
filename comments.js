// Create web server that listens on port 3000
// When client makes a request to http://localhost:3000/comments, return the following JSON data:
// [
//   {
//     "id": 1,
//     "username": "dilbert",
//     "comment": "I'm a comment"
//   },
//   {
//     "id": 2,
//     "username": "josh",
//     "comment": "I'm also a comment"
//   }
// ]

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log('Server is listening on port', port);
});
