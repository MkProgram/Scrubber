const express = require("express");
const app = express();

const {
  createServer
} = require("http");


app.use("/users", (request, response) => {
  response.send("Hello world");
});

server = createServer(app);

server.listen(8080, "127.0.0.1", () =>
{
  console.log("Server listening to port 8080");
});
