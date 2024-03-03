const express = require('express');
const redis = require('redis');
const app = express();
const process = require('process');


// Redis Client
const client = redis.createClient({
    /*
->  redis-server:
        image: 'redis'
    */
    host: 'redis-server', // This is the name of the service in the docker-compose.yml file for the redis container(name of the redis container in the network created by docker-compose)
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    // process.exit(0);  // 0: success, 1 or any other number: fail
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
