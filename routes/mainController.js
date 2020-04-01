// grab database connection
var db = require("../models");


// Routes
// =====================================
module.exports = function(app) {

    app.get("/", function(req,res) {
        res.render("index");
    });

    app.get("/cars", function(req,res){
        var carlist = [];
        db.Cars.findAll({}).then(function(result){
            result.forEach(function(car,i){
                carlist.push(car.dataValues);
            });
            var hbsObject = {
                car: carlist
            };
            res.render("listcars", hbsObject);
        });

    });

    app.get("/signup", function(req,res){
        res.render("signup");
    });


};