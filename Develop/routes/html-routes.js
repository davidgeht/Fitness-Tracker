const express = require("express");
const path = require("path");

const htmlroutes = express.Router();

htmlroutes.get('/exercise', function(req, res){
    let exercisePage = path.join(__dirname, "../../Develop/public/exercise.html")
    res.sendFile(exercisePage);
});

htmlroutes.get('/stats', function(req, res){
    let statsPage = path.join(__dirname, "../../Develop/public/stats.html")
    res.sendFile(statsPage);
});

htmlroutes.get('/', function(req, res){
    res.send('index.html');
});

module.exports = htmlroutes;
