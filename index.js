const express = require('express')
const app=express();
const routerApi=require('./routes');
const { json } = require('express');
app.use(express.json())


routerApi(app)
app.listen(3000);

console.log(`Server activo ${3000}`)
