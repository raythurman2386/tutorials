/* Primary file for the API
 *
 *
*/

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  // Get the URL and parse it

  // Get the PATH from the URL

  // Send the response
  res.end('Hello World\n');

  // Log the request path
});

// Start the server, and have it listen on port 3000
server.listen(8080, () => {
  console.log('The server is listening on port 8080');
});
