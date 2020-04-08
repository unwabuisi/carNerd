var db = require("../models");
var passport = require("../config/passport.js");

// Routes
// ===================================
module.exports = function(app) {

app.get("/api/v1/cars", function(req,res){
    db.Cars.findAll({}).then(function(allcars){
        // console.log(allcars);
        res.json(allcars).status(200);
    });
});

app.post("/api/v1/signup", function(req,res){
    db.User.create({
        username: req.body.username,
        password: req.body.password
    }).then(function(data){
        res.redirect(307, '/api/v1/login');
        // res.status(200).end();
    }).catch(function(error){
        switch (error.errors[0].message) {
            case "User.username cannot be null":
                res.status(500).send("Username cannot be empty. Please enter a username.");
                break;
            case "User.password cannot be null":
                res.status(500).send("Password cannot be empty. Please enter a password.");
                break;
            default:
                console.log(error.errors[0]);
        }
    });
});


// authenticates user when submitted
app.post("/api/v1/login", passport.authenticate("local"), function(req,res) {
    // var user = req.user.username;
    res.status(200).end();
});




};