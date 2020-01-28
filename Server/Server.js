const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/noteDB', { useNewUrlParser: true , useUnifiedTopology: true })


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api);


const port = 3002;
app.listen(port, function() {
  console.log(`Running on port ${port}`);
});