const express = require('express');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
    }

    middlewares() {

    }

    routes() {

    }

    listen() {

    }
}

module.exports = Server;