# RainbowSatAPI

This project delivers XYZ positions for the RainbowSatAR project.

## Future ideas

Transform this into a GraphQL source, to provide a friendly set of informations about satellites.

## How to develop

### Docker

```bash
docker build -f Dockerfile -t rainbowsatapi . # builds the image
docker run -it --rm -v $(pwd):/rainbow:delegated -w /rainbow -p 3000:3000 --name RainbowSatAPI rainbowsatapi # runs the project
```

## License

RainbowSatAPI is licensed under [GPL-3.0](./LICENSE).
