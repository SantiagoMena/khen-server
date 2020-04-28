const useragent = require('useragent');
const fs = require('fs');
const path = require('path');

class Clientes {
    constructor() {
        this.uriDB = path.join( __dirname, '../dbs/clientes.json');
        // verificar si existe el archivo json
        try {
            fs.accessSync( this.uriDB, fs.constants.R_OK | fs.constants.W_OK);
            this.clientes = require('../dbs/clientes.json');
        } catch (err) {
            this.clientes = [];
            this.guardar();
        }
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