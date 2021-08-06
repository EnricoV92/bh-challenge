const express = require('express');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(require('../routes/ownedProducts.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening at port:', this.port);
        })
    }
}

module.exports = Server;