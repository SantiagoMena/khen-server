const useragent = require('useragent');

class Clientes {
    constructor() {
        this.clientes = [];
    }

    agregarCliente(cliente) {
        this.clientes.push( cliente );

        return this.clientes;
    }
    
    getClientes() {
        return this.clients;
    }

    getCliente(id) {
        let cliente = this.clientes.filter( cliente => cliente.id === id )[0];

        return cliente;
    }

    borrarCliente(id) {
        let clienteBorrado = this.getCliente(id);
        this.clientes = this.clientes.filter( cliente => cliente.id !== id );
        
        return clienteBorrado;
    }

    log() {
        this.clientes.forEach( cliente => {
            const { id, headers } = cliente;
            const { referer } = headers;
            let { 'user-agent': userAgent } = headers;
            const objUserAgent = useragent.parse(userAgent);

            userAgent = objUserAgent.toString();
            console.log(`ID: ${ id } | UserAgent: ${ userAgent } | Referer: ${ referer }`);
        });
    }
}

module.exports = {
    Clientes
}