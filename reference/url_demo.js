const url = require('url'); 

const myUrl = new URL('http://mywebsite.com/hello.html?id100&status=active');

// Serialized URL
console.log(myUrl.href); 
console.log(myUrl.toString());

// Host root domain  'hostname' does not get port 'host' does get port
console.log(myUrl.host);

// Path name only
console.log(myUrl.pathname); 

// Serialized Query
console.log(myUrl.search); 

// Params object
console.log(myUrl.searchParams); 

// Add Param 
myUrl.searchParams.append('abc', '123'); 
console.log(myUrl.searchParams); 

// Loop through params
myUrl.searchParams.append
console.log(myUrl.searchParams); 