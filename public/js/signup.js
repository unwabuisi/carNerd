

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
        $("#errorMessages").html(result.responseText);
        console.log(result.responseText);
    });
});