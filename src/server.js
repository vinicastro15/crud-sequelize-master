const express = require('express');
const Route = require('../src/routes/routes.js');
const app = express();
const port = 3000;
require('dotenv/config');

app.use(express.json());
app.use(Route)



app.listen(port, ()=>{
    console.log('Server is runner na porta🚀 -> ' + port);
});




