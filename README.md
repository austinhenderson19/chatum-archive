# chatum

A modern designed all-in-one chat application that brings together the most popular chat applications into a convenient view for the most productive messaging workflow.

## Documentation

Please read all documentation before actively contributing to the project. The [docs](/docs) folder contains project-wide documentation regarding branching and standards.

### Setup

Files related to development and production environment setup are found in [docs/Setup](docs/setup).

### Standards and Conventions

Project-wide standards and conventions are defined in [docs/Standards](docs/standards).

## Project Components

### Single Page Application

The single page application located in [src/client](src/client) defines a web-based SPA Nuxt project.

### Microservices

Multiple express applications located in [src/microservices](src/microservices) defines a microservice implementation.

### Reverse Proxy

The reverse proxy NGINX server located in [src/servers/reverseproxy](src/servers/reverseproxy) defines the forward facing Chatum web server.
