// index.js

﻿var express = require('express');
var app = express();

app.set("view engine","ejs"); // 1
app.use(express.static(__dirname + '/public'));

// 2
app.get("/hola", function(req,res){
 res.render("hola", {name:req.query.nameQuery});
});

// 3
app.get("/hola/:nameParam", function(req,res){
 res.render("hola", {name:req.params.nameParam});
});

app.listen(3000, function(){
 console.log('Server On!');
});
