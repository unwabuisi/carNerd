// dependencies ====================================
var db = require("./models");
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

// set up Express App ================================
var port = process.env.PORT || 8080;
var app = express();

// static directory
app.use(express.static(__dirname + '/public'));

// for parsing json or application/x-www-form-urlencoded - posting nested objects
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set up Handelebars Helpers
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        trimDate: function (dateToTrim) {
            var newDate = String(dateToTrim).substring(0,10);
            return newDate;
        },
        capitalizeFirst: function(inputstr) {
            return String(inputstr).substring(0,1).toUpperCase() + inputstr.substring(1);
        }
    },
    defaultLayout:"main"
});


// set express to use handlebars for formatting
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Routes ================================
require("./routes/mainController.js")(app);
require("./routes/apiRoutes.js")(app);


// Start the Express App
db.sequelize.sync({force:false}).then(function(){
    app.listen(port, function(){
        console.log("App listening on PORT: " + port);
    });
});


