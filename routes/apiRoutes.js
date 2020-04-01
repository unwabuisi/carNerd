var db = require("../models");


// Routes
// ===================================
module.exports = function(app) {

app.get("/api/v1/cars", function(req,res){
    db.Cars.findAll({}).then(function(allcars){
        // console.log(allcars);
        res.json(allcars).status(200);
    });
});



};