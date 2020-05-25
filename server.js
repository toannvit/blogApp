'use strict';
const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const init = async () => {
    const server = Hapi.Server({
        port: 5000,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await Promise.all([
        server.register(Inert)
    ])


    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            return h.file('pages/login.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true
            }
        }
    });

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
}

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
})

init();