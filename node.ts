var sum = require('build/myfirstecmmodule.js');
var http = require('http');
var fs = require('fs');
var url = require('url');
var uc = require('upper-case');


http.createServer(function (req?: any, res?:any) {
  req;
  
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err:any, data:any) {
    data;
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);

    console.log(sum(4,5));
    console.log(uc.upperCase("Upper Case inicializado!"));
    return res.end();
    
  });
  
}).listen(8080);
