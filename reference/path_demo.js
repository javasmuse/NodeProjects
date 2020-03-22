const path = require('path');

// basename gets the base file name long form
console.log(__filename); 

// basename gets the base file name just the name
console.log(path.basename(__filename)); 

// directory name
console.log(path.dirname(__filename));

// extension name
console.log(path.extname(__filename));

// Create path object - really json of entire path and parts
console.log(path.parse(__filename));

// Concatenate paths join 
console.log(path.join(__dirname, 'test', 'hello.html'));