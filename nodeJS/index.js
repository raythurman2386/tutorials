/* Primary file for the API
 *
 *
*/

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the PATH from the URL
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();

    // Choose the handler this request goes to
    let chosenHandler = typeof router[trimmedPath] !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    // Construct the data object
    let data = {
      trimmedPath       : trimmedPath,
      queryStringObject : queryStringObject,
      method            : method,
      headers           : headers,
      payload           : buffer,
    };

    // Route the request to the handler
    chosenHandler(data, (statusCode, payload) => {
      // status code called back by handler
      statusCode = typeof statusCode == 'number' ? statusCode : 200;

      // Use the payload called back by the handler
      payload = typeof payload == 'object' ? payload : {};

      // Convert the payload to a string
      let payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      // Log the request path
      console.log(`Returning this response: `, statusCode, payloadString);
    });
  });
});

// Start the server, and have it listen on port 3000
server.listen(8080, () => {
  console.log('The server is listening on port 8080');
});

// Define the handlers
const handlers = {};

// Sample handler
handlers.sample = (data, callback) => {
  // callback a http status code, and a payload object
  callback(406, { name: 'sample handler' });
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Define a request router
const router = {
  sample : handlers.sample,
};
