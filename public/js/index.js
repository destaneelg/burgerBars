$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burgerID = $(this).children(".burgerID").val();
      console.log(burgerID);
      $.ajax({
        method: "PUT",
        url: "/index" + burgerID
      }).then(function(data) {
        location.reload();
      });
  
    });
  });
  