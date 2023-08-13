# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Requirement
```bash
# node version v20.3.1 or later
$ node -v

# npm version 9.7.2 or later
$ npm -v
```

## Setup environment
Edit file `src/environment/environment.ts` and provide the base url for the server e.g `http://localhost:3000`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment production
```bash
# Build image
docker build -t color-frontend-image .

# Stop and Remove previous container if exists. Ignore if there is error message no such container
docker stop color_frontend || true
docker rm color_frontend || true

# Run container and will serve at port 4200
docker run --name color_frontend -p4200:80 --restart always -d color-frontend-image
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
