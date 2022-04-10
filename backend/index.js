const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json()); //Peticiones en formato JSON




//Puerto para correrlo es npm run dev
app.listen(5057, (req, res) =>{
    console.log("Corriendo");
});