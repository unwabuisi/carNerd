// grab database connection
var db = require("../models");
var passport = require("../config/passport.js");

// Routes
// =====================================
module.exports = function(app) {

    app.get("/", function(req,res) {

        res.render("index");
    });

    app.get("/cars", passport.authenticate("local", {failureRedirect:'/login'}), function(req,res){

        var carlist = [];
        db.Cars.findAll({}).then(function(result){
            result.forEach(function(car,i){
                carlist.push(car.dataValues);
            });
            var hbsObject = {
                car: carlist,
                loggedin: true
            };
            res.render("listcars", hbsObject);
        });

    });

    app.get("/signup", function(req,res){
        res.render("signup");
    });

    app.get("/login", function(req,res){
        res.render("login");
    });


};