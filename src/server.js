// eslint-disable-next-line no-undef
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line no-undef
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5001,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
