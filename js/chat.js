
var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
app.get('/', function(req, res) {
  res.sendFile( __dirname + '/chat.html');
});
io.on('connection', function(socket) {
  console.log('Usuario conectado');
  socket.on('nuevo mensaje', function(msj) {
    io.emit('nuevo mensaje', msj);
  });
  socket.on('disconnect', function() {
    console.log('Usuario desconectado');
  });
});
http.listen(8080, function() {
  console.log('Escuchando en el puerto 8080');
});