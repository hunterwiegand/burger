$(document).on("click", ".change-devoure", function (event) {

    // If the data-newdevoure is true
    if($(this).data("newdevoure")) {
        // Change data-newdevoure to be false on click

        var newTemp = {
            devoure: $(this).data("newdevoure")
        }

        console.table(newTemp);

        //Ajax call to update database
        $.ajax("/api/burger/" + $(this).data("id"), {
            type: "PUT",
            data: newTemp
        }).then(function(){
            location.reload(); 
        })

    } else {
        var newTest = {
            devoure: $(this).data("newdevoure")
        }

        console.table(newTest);

        //Ajax call to update database
        $.ajax("/api/burger/" + $(this).data("id"), {
            type: "PUT",
            data: { devoure: false }
        }).then(function(){
            location.reload();
        })

        console.log("After change: " + $(this).data("newdevoure"));
    }
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });