var http = require('http');

var static_contents = require('./static.js')

var server = http.createServer(function(request, response) {
  console.log('client request URL: ', request.url);
  static_contents(request, response);
});
server.listen(8000);
console.log('Running in localhost at port 8000.');
