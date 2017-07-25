var fs = require('fs');
module.exports = function(request, response){
  if(request.url === '/book'){
    fs.readFile('./views/book.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/sky'){
    fs.readFile('./views/sky.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/book/new'){
    fs.readFile('./views/book/new.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/book.jpg'){
    fs.readFile('./images/book.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/sky.jpg'){
    fs.readFile('./images/sky.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else{
    response.writeHead(404);
    response.end('File not found!');
  }
}
