```Docker
  docker run <image_name>
```
docker - reference the client

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
  docker start -a <image_id>
```
Get logs from containers
```Docker
  docker logs <container_id>
```
Stopping Containers
```Docker
  docker stop <container_id>
  docker kill <container_id>
```
Multi-command Containers
```dockerfile
  docker exec -it <container_id> command
  docker exec -it redis-server sh
```
`-it` flag is used to provide input to the container, t basically pretifies the output and i provides the input to the container

> `docker exec -it <container_id> sh` is used to get the shell access to the container