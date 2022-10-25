const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('<h1>This is a fake server</h1>');
});
app.use("/api/v1", require("./api/v1/routes/api.routes.js"));

server.listen(9000, () => {
  console.log('listening on 9000');
});