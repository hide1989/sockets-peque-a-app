var socket = io(); //usamos var para aumentar compatibilidad entre navegadores web

socket.on('connect', function() {

    console.log('conectando al servidor');
});

//para identificar desconexion con el servidor
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//emitiremos un mensaje para que el server lo escuche
//el primer parametro es como va llegar el mensaje algo asi como un asunto
//el segundo parametro es el mensaje, se puede neviar cadenas u objetos
//el tercero es una funcion que se va ejecutar si todo sale bien
socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

//escuchar server
//el primer parametro es el asunto talcual se llama desde el backend
//el segundo parametro es una funcion que recibe el menjaje, se puede llamar como se desee
socket.on('enviarMensaje', function(message, callback) {
    console.log(message);
});