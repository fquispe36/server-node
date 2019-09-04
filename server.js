const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 9001;

app.use(express.static(__dirname + '/test-angular'));

app.get('*', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.sendFile(path.join(__dirname + '/test-angular/index.html'));
});

app.listen(port, () => {
  console.log('Server is running on port: ', port);
});