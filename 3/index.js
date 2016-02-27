var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

var Inert = require('inert');
server.register(Inert, function (err){
  if(err) throw err;
});

server.route({path: '/', method:'GET', handler:{file: "3/index.html"}});

server.start(function(){
  console.log('Server running at:', server.info.uri);
});
