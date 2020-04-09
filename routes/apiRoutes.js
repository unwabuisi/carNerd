var db = require("../models");
var passport = require("../config/passport.js");

// Routes
// ===================================
module.exports = function(app) {

    app.get("/api/v1/cars", function(req,res){
        //this function will get a JSON list of all cars, and their associated records of who purchased the car
        db.Cars.findAll({include:
            {
                model: db.User,
                attributes: ['username', 'isAdmin']
            }
        }).then(function(allcars){
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

    app.put("/api/v1/purchase/:carid", function(req,res){
        db.Cars.update({
            //fills in the buyer id field on the cars db with the user who is buying this car's ID
            buyer_id: req.user.id,
            date_purchased: req.body.date
        },
        {
            where: {
                id: req.body.car_id
            }
        }).then(function(result){
            console.log(result);
        });
        console.log(req.body);
        console.log(req.user.id);
    });




};