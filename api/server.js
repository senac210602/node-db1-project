const express = require("express");
const accountsRouter = require('./accounts/accounts-router')
const server = express();

server.use(express.json());
server.use('api/accounts', accountsRouter)

server.use('*',(req, res) => {
res.send(`
<h1>chana created this</h1>
<p>more info</p>
`)
})
module.exports = server;
