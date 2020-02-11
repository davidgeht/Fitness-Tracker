const express = require("express");
const path = require("path");
const db = require("../models");

var apiroutes = express.Router();

apiroutes.get('/api/workouts', async function(req, res){
    //get and return all workouts
    let result = await db.Workout.find({});
    res.json(result);
});

apiroutes.put('/api/workouts/:id', async function(req, res){
    //add an exercise from the body
    let id = req.params.id;
    let exercise = req.body;
    if (!id) {
        console.log('not ID!');
    } else {
        await db.Workout.findByIdAndUpdate(id, {$push: {exercises: exercise}});
        res.json({'id': id});
    }
});

apiroutes.post('/api/workouts', async function(req, res){
    //create a new workout 
    let workout = new Workout({exercises: []});
    workout.save();
});

apiroutes.get('/api/workouts/range', async function(req, res){
    //get workouts in range
    let result = await db.Workout.find({});
    res.json(result);
});

module.exports = apiroutes;
