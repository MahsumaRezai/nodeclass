const http = require('http');
const express = require('express');
const app = express();
const admin = require('./routes/admin');
const shop = require('./routes/shop')
const body = require('body-parser');
const server = http.createServer(app);
app.use(body.urlencoded({ extended: false }));



app.use(admin);
app.use(shop);
app.use((req, res, next) => {
    res.status(404).send('<h1>this page not found</h1>')
})

server.listen(3000)