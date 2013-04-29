// testing Connect.js
var connect = require('connect')
  , http = require('http');
  
/*
var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(connect.cookieParser())
  .use(connect.session({ secret: 'my secret here' }))
  .use(function(req, res){
    res.end('Hello from Connect!\n');
  });
*/

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static(__dirname))
  .use(function(req, res){
/*  
    console.log(' * req: ', req);
    console.log(' \n ******************** \n ');
    console.log(' * res: ', res); 
    console.log(' \n  =================== \n ');
    
    res.end('hello world\n');
*/    
  })
 .listen(3000);