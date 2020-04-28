const useragent = require('useragent');
const fs = require('fs');
const path = require('path');

class Clientes {
    constructor() {
        this.pathDB = path.join( __dirname, '../dbs/');
        this.uriDB = path.join( __dirname, '../dbs/clientes.json');
        this.clientes = [];

        this.guardar();
    }

    agregarCliente(cliente) {
        this.clientes.push( cliente );

        this.guardar();

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

        this.guardar();
        
        return clienteBorrado;
    }

    guardar() { 
        if( !fs.existsSync( this.pathDB ) ) {
            fs.mkdirSync( this.pathDB );
        }

        fs.writeFileSync( this.uriDB, JSON.stringify( this.clientes ) );
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