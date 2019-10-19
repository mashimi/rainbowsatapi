// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
module.exports = routes;
