const fetch = require('node-fetch');
const satellite = require('satellite.js');

async function routes(fastify, options) {
  fastify.get('/:satelliteId', async (request, reply) => {
    const reqData = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
    };

    const id = request.params.satelliteId;

    const url = `https://www.n2yo.com/rest/v1/satellite/tle/${id}&apiKey=${process.env.API_KEY}`;

    const coordinates = [];
    const velocities = [];

    await fetch(url, reqData).then((response) => response.json())
      .then((json) => {
        const tle = json.tle.split('\r\n');
        const satrec = satellite.twoline2satrec(tle[0], tle[1]);
        const date = new Date();
        let positionAndVelocity;
        let positionEci;
        let velocityEci;

        for (let i = 0; i < 3600; i += 1) {
          positionAndVelocity = satellite.propagate(satrec, date);
          positionEci = positionAndVelocity.position;
          velocityEci = positionAndVelocity.velocity;

          coordinates.push(
            {
              x: positionEci.x,
              y: positionEci.y,
              z: positionEci.z,
            }
          );

          velocities.push(
            velocityEci
          );

          date.setMinutes(date.getMinutes() + 1);
        }
      });

    return { coordinates, velocities };
  });
}

module.exports = routes;
