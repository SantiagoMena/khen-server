const { io } = require('../bin/www');
const { Clientes } = require('../classes/clientes');

const clientes = new Clientes;

io.on( 'connection', socket => {
    console.log(`Cliente ${ socket.id } Online!`);

    const cliente = {
        id: socket.id,
        headers: socket.handshake.headers
    };

    clientes.agregarCliente( cliente );
    clientes.log();


    socket.on( 'disconnect', () => {
        const clienteDesconectado = clientes.borrarCliente( cliente.id );
        
        if( clienteDesconectado ) {
            console.log(`Cliente ${ socket.id } Offline!`);
        }
    });
});