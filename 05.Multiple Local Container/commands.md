```dockerfile
  docker-compose up  		 // docker run myimage
  docker-compose up --build   	// docker build . && docker run myimage (rebuild image)
  docker-compose up -d         // runs in background so that we can execute more commands
  docker-compose down
  docker-compose ps	     // must be run inside folder containing docker-compose.yml file
```
