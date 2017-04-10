const https = require('https');

console.log('I did it!');

const options = {
host: 'www.example.org', 
path: '/'
};

const callback = function (response){
  console.log('In response to handler callback!');
  console.log('response ', response);
}

console.log("i'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request");
