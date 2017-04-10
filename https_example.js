const https = require('https');

console.log('I did it!');

const options = {
host: 'stream-large-file.herokuapp.com', 
path: '/give-me-stuff-now'
};

const callback = function (response){
  console.log('In response to handler callback!');
 
  response.on('data', function (chunk){
    console.log('[-- CHUCK OF LENGTH ' + chunk.length + '--]');
    console.log(chunk.toString());
});
}

console.log("i'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request");
