

// after form submit, send POST request to server
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
        console.log(result.responseText);
    }).done(function(data){
        $("#statusMessage").empty();
        $("#statusMessage").css("color","green").text("You've signed up successfully. Please store your password in a safe place!");
        setTimeout(function(){
            location.assign("/login");
        },3000);

    });
});