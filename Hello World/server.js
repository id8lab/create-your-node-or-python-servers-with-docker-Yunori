//server.js
const express = require('express'),
  server = express();

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

server.get('/time', (request, response) => {
  var date = new Date();
  response.send(date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + date.getDate() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
});

//Binding to localhost://3000
server.listen(3000, () => {
  console.log('Express server started at port 3000');
})
