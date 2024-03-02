```Docker
  docker run <image_name>
```
docker - reference the Docker client

- Overridding the default command

```Docker
  docker run <image_name> command
  docker run busybox ls
  docker run busybox echo 'docker'
```

>The code ```docker run hello-world ls``` will give an error because the image doesn't have the ls.exe in it's directory.`docker run = docker create + docker start`

List of running containers
```Docker
  docker ps
```
List of all containers
```Docker
  docker ps --all 
```
Delete all containers
```Docker
  docker system prune
```
Returns the same id, but actually need to add `-a` flag to see the output or can use `logs`
```Docker
  docker start <image_id>
```
This gives the required result
```Docker
  # `-a` flag is used to attach the container to the terminal so that we can see the output of the container in the terminal
  docker start -a <image_id>
```
Get logs from containers
```Docker
  docker logs <container_id>
  # `-f` flag is used to follow the logs of the container. It's like tail -f command in linux to follow the logs of the file in real time.
  docker logs -f <container_id>
```
Stopping Containers
```Docker
  docker stop <container_id>
  docker kill <container_id>
  # `stop` sends a SIGTERM signal to the container and waits for the container to stop. If the container doesn't stop in 10 seconds, then it sends a SIGKILL signal to the container to stop it.
```
Multi-command Containers
```Docker
  docker exec -it <container_id> command
  # The command below will give the shell access to the container
  docker exec -it redis-server sh
  #`-it` flag is used to provide input to the container, t basically pretifies the output and i provides the input to the container
```

> `docker exec -it <container_id> sh` is used to get the shell access to the container.

> Once a container is created, the defualt command can't be replaced. We can only run additional commands on the container. If we want to replace the default command, we need to create a new container. 

> `docker exec -it <container_id> sh` is used to get the shell access to the container.

>There are three standard streams that are associated with a container:
- STDIN - Standard Input (When we add `-i` flag to the `docker exec` command, it means that we want to attach our terminal to the standard input of the container.)
- STDOUT - Standard Output (This is used to get the output of the container in our terminal. When we add `-a` flag to the `docker start` command, it means that we want to attach our terminal to the standard output of the container.)
- STDERR - Standard Error