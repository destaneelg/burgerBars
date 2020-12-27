$(document).ready(function () {
    $(".devour-form").on("submit", function(event) {
        event.preventDefault();

        var burgerID = $(this).children(".burger_id").val();
        console.log(burgerID);
        $.ajax({   
        method: "PUT", 
        url: "/burgers/" + burgerID})
        .then(function(data) {
            location.reload();
    });

    });
})