const Server = require('./server/server');
require('dotenv').config();

server = new Server ();
server.listen();

