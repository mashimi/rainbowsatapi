# RainbowSatAPI

This project delivers XYZ positions for the RainbowSatAR project.

## Future ideas

Transform this into a GraphQL source, to provide a friendly set of informations about satellites.

## How to develop

First important thing is to have a API KEY from [N2YO](https://www.n2yo.com).

Then, you need to install [nodenv](https://github.com/nodenv/nodenv) or [nvm](https://github.com/nvm-sh/nvm) or [Docker](https://www.docker.com/get-started).

> After Docker the installation, we recommend going to preferences, and setting the number of CPUs to the maximum capacity of your computer (to improve performance).

### nodenv or nvm

```bash
nvm install --lts
curl -o- -L https://yarnpkg.com/install.sh | bash
yarn global add fastify-cli
yarn install
```

### Docker

```bash
docker build -f Dockerfile -t rainbowsatapi . # builds the image
docker run -it --rm -v $(pwd):/rainbow:delegated -w /rainbow -p 3000:3000 -e API_KEY=my_key --name RainbowSatAPI rainbowsatapi ash # enters the container
yarn install # install dependencies
yarn dev # runs the project in development mode
```

Commands:

```bash
docker run -it --rm -v $(pwd):/rainbow:delegated -w /rainbow -p 3000:3000 -e API_KEY=my_key --name RainbowSatAPI rainbowsatapi yarn dev # runs the project in development mode (if you followed above steps at least once)
docker exec -it RainbowSatAPI ash # enters the container
docker kill RainbowSatAPI # kills the container
```

## Routes

### /

This route has nothing

### /:noradID

This route delivers an array of objects.

Each object will have a `coordinates` and `velocities` key, with X, Y, Z positions in them.

> You can check the NORAD IDs here: [https://www.n2yo.com/database/](https://www.n2yo.com/database/)

## License

RainbowSatAPI is licensed under [GPL-3.0](./LICENSE).
