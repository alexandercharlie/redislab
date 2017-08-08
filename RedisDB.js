var redis = require('redis');
var port=10427;
var host='redis-10427.c10.us-east-1-2.ec2.cloud.redislabs.com';
var pass='@alex#441';
var client = redis.createClient(port,host, {no_ready_check: true});
client.auth(pass, function (err) {
    if (err) throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
});