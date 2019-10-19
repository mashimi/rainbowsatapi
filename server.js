const fetch = require('node-fetch');

const fastify = require('fastify')({
  logger: { level: 'debug' }
})

const satellite = require('satellite.js');

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    const reqData = {
      method: 'GET',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    };

    const id = 25544; // ISS

    const url = `https://www.n2yo.com/rest/v1/satellite/tle/${id}&apiKey=${process.env.API_KEY}`;

    let coordinates = [];

    await fetch(url, reqData).then(response => response.json())
      .then(json => {
        const tle = json.tle.split('\r\n');
        const satrec = satellite.twoline2satrec(tle[0], tle[1]);
        const positionAndVelocity = satellite.propagate(satrec, new Date());
        const positionEci = positionAndVelocity.position;

        coordinates.push(
          {
            x: positionEci.x,
            y: positionEci.y,
            z: positionEci.z
          }
        );
      });

    return { coordinates };
  })
}
module.exports = routes;
