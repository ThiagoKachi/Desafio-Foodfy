const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require('./data')

server.use(express.static('public'))

server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render('index', { items: receitas })
})

server.get("/about", function(req, res) {
    return res.render('about')
})

server.get("/recipes", function(req, res) {
    return res.render('recipes', { items: receitas })
})

server.get("/recipes-detail/:index", function (req, res) {
    const recipes = [...receitas]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    
    const recipe = recipes[recipeIndex]

    
    return res.render("recipes-detail", {receita: recipe})
        
})


server.listen(5000, function() {
    console.log('Server is runnig!')
})


// Error 404
server.use(function(req, res) {
    res.status(404).render("not-found");
  });