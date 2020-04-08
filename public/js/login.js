
// after form submit, send POST request to server
$('#loginform').submit(function(e) {
    e.preventDefault();
    // get all the inputs into an array.
    var inputs = $('#loginform :input');
    var values = {};
    inputs.each(function() {
        if ($(this).val() !== "") {
            values[this.name] = $(this).val();
        }
    });



    $.ajax({
        type: "POST",
        url: "/api/v1/login",
        data: values
    }).fail(function(result){
        $("#statusMessage").css("color","red").html(result.responseText);
        console.log(result.responseText);
    }).done(function(data){
        $("#statusMessage").empty();
        $("#statusMessage").css("color","green").text("You've signed in successfully!");
        setTimeout(function(){
            location.assign("/cars");
        },1500);

    });
});