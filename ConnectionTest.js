var redis = require('redis');
var port=10111;//Your Redis cloud port number
var host='redis-10111.c10.us-west-1-4.ec2.cloud.redislabs.com';//Your redis cloud host
var pass='ABCDPASS';//Redis cloud password
var client = redis.createClient(port,host, {no_ready_check: true});
client.auth(pass, function (err) {
    if (err) throw err;
});
client.on('connect', function() {
    console.log('Connected to Redis');
});
client.set('A-KEY', 'A-VALUE');
client.get('A-KEY', function (err, reply) {
    console.log(reply.toString()); 
});
