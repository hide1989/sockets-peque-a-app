const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    //enviamos mensaje al cliente
    //primer parameeetro es como un asunto
    //el segundo parametro es el mensaje, puede ser cadena o un objeto
    //el tercero es una funcion que se va ejecutar si todo sale bien
    client.emit('enviarMensaje', {
        usuario: 'administrador',
        message: 'bienvenido'
    }, function() {
        console.log('se disparo el callback');
    });

    //se usa para identificar que el cleinte se desconecta
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar cliente
    //el primer parametro es el asunto talcual se llama desde el fronted
    //el segundo parametro es una funcion que recive el menjaje, se puede llamar como se desee y si se desea puede recibir
    //la funcion que se ejecuta cuando todo sale bien en este caso el callback
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //si se utiliza la propiedad broadcast, todos los conectados reciben respuesta del server

        /*  if (message.usuario) {

             callback({
                 resp: "todo salio bien"
             });
         } else {
             callback({
                 resp: "todo salio mal"
             });
         } */

    });

})