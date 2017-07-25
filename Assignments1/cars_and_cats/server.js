var http = require('http');
var fs = require('fs');

console.log(http);

var server = http.createServer(function(req, res) {
  console.log('client request URL: ', req.url);

  if(req.url === '/cars'){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/cats'){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/cars/new'){
    fs.readFile('./views/add_car.html', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/book.jpg'){
    fs.readFile('./images/book.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }
  else if(req.url === '/images/sky.jpg'){
    fs.readFile('./images/sky.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  }

  else{
    res.writeHead(404);
    res.end('File not found!');
  }
});
server.listen(7077);
console.log('Running in localhost at port 6789.');
