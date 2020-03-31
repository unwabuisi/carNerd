// grab database connection
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req,res) {
        res.render("index");
    });

    app.get("/cars", function(req,res){
        res.render("listcars");
    });


};