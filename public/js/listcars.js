$(document).ready(function(){

    $.get("/api/v1/cars", function(data){
        console.log(data.dataValues);
    });






});

