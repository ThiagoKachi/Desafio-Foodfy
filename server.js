const express = require('express')
const server = express()

server.get("/", function(req, res) {
    return res.send("Hi")
})

server.listen(5000, function() {
    console.log('Server is runnig!')
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });