'use strict'

module.exports = async (fastify, options) => {
  fastify.register(require('./routes/satellite.js'));

  fastify.get('/', async (request, reply) => {
    return { nothing: true };
  });
}
