const express = require("express");
const mongoose = require("mongoose");
const htmlroutes = require('./routes/html-routes');
const apiroutes = require('./routes/api-routes');

const path = require("path");

let db = require("./models");
 
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds213079.mlab.com:13079/heroku_6xwd7mgc",{useNewUrlParser: true} );
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiroutes);
app.use(htmlroutes);


app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`);
});