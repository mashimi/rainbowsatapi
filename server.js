const satelliteRoute = require('./routes/satellite.js');

module.exports = async (fastify, options) => {
  fastify.register(satelliteRoute);

  fastify.get('/', async (request, reply) => ({ nothing: true }));
  fastify.get('/favicon.ico', async (request, reply) => reply.code(404).send());
};
