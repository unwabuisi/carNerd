
// once a "Buy Now" button is clicked, data is sent to the server
$(".buynow-btn").on("click", function(){
    var carID = $(this).data("carid");
    var data = {
        car_id: carID,
        date: new Date()
    };
    console.log(data);
    $.ajax({
        url: '/api/v1/purchase/' + carID,
        type:'PUT',
        data: data
    }).fail(function(error){
        console.log(error);
    }).done(function(result){
        location.assign("/");
    });
});

