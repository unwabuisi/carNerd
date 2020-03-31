// grab database connection
var db = require("../models");


// Routes
// =====================================
module.exports = function(app) {

    app.get("/", function(req,res) {
        res.render("index");
    });

    app.get("/cars", function(req,res){
        res.render("listcars");
    });


};