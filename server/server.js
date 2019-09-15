const express = require('express');
const socketIO = require('socket.io'); //no trabaja directamente con express pero si con http por defecto de node
const http = require('http'); //es obligatorio exportarlo para que sockets

const path = require('path');

const app = express();
let server = http.createServer(app); //lo llamamos asi para que http trabaje con las config de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion con el backend
module.exports.io = socketIO(server);

require('./sockets/socket');

//para saber que un usuario se conecta al server



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});