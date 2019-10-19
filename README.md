# RainbowSatAPI

This project delivers XYZ positions for the RainbowSatAR project.

## Future ideas

Transform this into a GraphQL source, to provide a friendly set of informations about satellites.

## How to develop

First important thing is to have a API KEY from [N2YO](https://www.n2yo.com).

### Docker

If you're running for the first time, follow these steps:

```bash
docker build -f Dockerfile -t rainbowsatapi . # builds the image
docker run -it --rm -v $(pwd):/rainbow:delegated -w /rainbow -p 3000:3000 -e API_KEY=my_key --name RainbowSatAPI rainbowsatapi ash # enters the container
yarn install # install dependencies
yarn start # runs the project
```

Commands:

```bash
docker run -it --rm -v $(pwd):/rainbow:delegated -w /rainbow -p 3000:3000 -e API_KEY=my_key --name RainbowSatAPI rainbowsatapi # runs the project (if you followed above steps at least once)
docker exec -it RainbowSatAPI ash # enters the container
docker kill RainbowSatAPI # kills the container
```

## License

RainbowSatAPI is licensed under [GPL-3.0](./LICENSE).
