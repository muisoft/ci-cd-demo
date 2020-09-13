const express = require('express');//require('http');

// app.createServer((req, res) => {
//     console.log("Hello")
// })
const app = express();
app.get((req, res) => {
   console.log("Hello")
})

app.listen(30000);
