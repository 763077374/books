var http = require('http')

var server = http.createServer(function (req,res) {
  res.end('<h1> hello world </h1>')  
})

server.listen(3000)
