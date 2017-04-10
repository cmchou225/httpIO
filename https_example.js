const https = require('https');

console.log('I did it!');

const options = {
host: 'www.example.com', 
path: '/'
};

const callback = function (){
console.log('In response to handler callback!');
}

console.log("i'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request");
