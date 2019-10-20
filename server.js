'use strict'

module.exports = async (fastify, options) => {
  fastify.register(require('./routes/satellite.js'));
}
