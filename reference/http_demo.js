const http = require("http");

//create server object
http
  .createServer((req, res) => {
    //write response
    res.write("Hello Cookie - wanna treat?");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
