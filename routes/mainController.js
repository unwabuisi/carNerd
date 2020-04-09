// grab database connection
var db = require("../models");
var passport = require("../config/passport.js");

// Routes
// =====================================
module.exports = function(app) {

    app.get("/signup", function(req,res){
        res.render("signup");
    });

    app.get("/login", function(req,res){
        res.render("login");
    });

    app.get("/logout", function(req,res){
        req.logout();
        res.redirect("/");
    });

    app.get("/", function(req,res) {

        if (!req.user) {
            res.render("index");
        }
        else {
            hbsObject = {
                username: req.user.username,
                loggedin:true
            };
            res.render("home",hbsObject);
        }

    });

    // lists all the cars for sale
    app.get("/cars", function(req,res){
        //if user is not logged in, redirect them to login page
        if (!req.user) {
            return res.redirect("/login");
        }
        var carlist = [];
        
        db.Cars.findAll({}).then(function(result){
            result.forEach(function(car,i){
                carlist.push(car.dataValues);
            });
            var hbsObject = {
                car: carlist,
                loggedin:true,
                username: req.user.username
            };
            res.render("listcars", hbsObject);
        });

    });

    app.get("/user/:username",function(req,res){

        res.render("profile",
        {
            username:req.user.username,
            loggedin:true
        });
    });
};