var redis = require('redis');
var port=10111;//Your Redis cloud PORT
var host='redis-10111.c10.us-west-1-4.ec2.cloud.redislabs.com';//Your Redis cloud host name
var pass='#####';//Redis cloud password
var client = redis.createClient(port,host, {no_ready_check: true});
client.auth(pass, function (err) {
    if (err) throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
});
