# Docker 

Docker makes it easy to install and run software on any computer, webserver, etc without worrying about dependencies and all.

Docker is a platform or ecosystem around creating and running container.

Image: Single file with all the dependencies and config required to run a program and a starup command.
Container: Instance of an image. Runs a program.

Docker Ecosystem: 
  - Docker Client (Docker CLI) - Tool that we are going to issue commands to. `Docker client` doesn't do things on it's own with container or images it's just a tool to help us interact with `Docker Server`.
  - Docker Server (Docker Daemon) - Tool that is responsible for creating images, running containers, etc.
  - Docker Machine
  - Docker Hub - Images are stored globally
  - Docker Compose
  - Docker Images

```Docker
docker --version
docker version
docker run hello-world
```

> Namespacing: Isolating resources per process (or group of process)
> Control Groups: Limit the amount of resources use per process

This feature of namespacing and control groups are linux feature. Windows and Mac uses virtual machines to achive the same.