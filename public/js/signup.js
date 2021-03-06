
// after form submit, send POST request to server with signup info
$('#signupform').submit(function(e) {
    e.preventDefault();
    // get all the inputs into an array.
    var inputs = $('#signupform :input');
    var values = {};
    inputs.each(function() {
        if ($(this).val() !== "") {
            values[this.name] = $(this).val();
        }
    });

    $.ajax({
        type: "POST",
        url: "/api/v1/signup",
        data: values
    }).fail(function(result){
        $("#statusMessage").css("color","red").html(result.responseText);
        console.log("ERORR: "+result.responseText);
    }).done(function(data){
        $("#statusMessage").empty();
        $("#statusMessage").css("color","green").text("You've signed up successfully. Please store your password in a safe place!");
        setTimeout(function(){
            location.assign("/cars");
        },1500);

    });
});