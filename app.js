const http = require('http');
const express = require('express');
const app = express();
const admin = require('./routes/admin');
const shop = require('./routes/shop')
const body = require('body-parser');
app.use(admin);
app.use(shop);
app.use(body.urlencoded({ extended: false }))








const server = http.createServer(app);

server.listen(3000)