const express = require('express')
const app = express()
const Port=3000;
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log('first test');
app.listen(Port, `le server est demmaré au Port ${Port}`)