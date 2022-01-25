var Quadkey = require('quadkeytools');
var location = {lat:47.077542, lng: 39.531773};
var detail = 7;
var key = Quadkey.locationToQuadkey(location, detail); 
console.log(key); 
// a lib https://www.npmjs.com/package/quadkeytools