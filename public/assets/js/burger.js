$("#TEST").on("click", function (event) {
    console.log("Clicked the button");
})

$(document).on("click", ".change-devoure", function (event) {

    // If the data-newdevoure is true
    if($(this).data("newdevoure")) {
        // Change data-newdevoure to be false on click
        $(this).data("newdevoure", true);
        var temp = $(this).data("newdevoure");

        var newTemp = {
            devoure: temp
        }


        console.table(newTemp);

        //Ajax call to update database
        $.ajax("/api/burger/" + $(this).data("id"), {
            type: "PUT",
            data: newTemp
        }).then(function(){
            console.log("Changed devoure to ", temp);
            location.reload(); 
        })

        console.log("After change: " + $(this).data("newdevoure"));

    } else {
        $(this).data("newdevoure", false);
        var test = false;


        var newTest = {
            devoure: test
        }

        console.table(newTest);


        console.log("new temp: " + newTest.devoure);

        //Ajax call to update database
        $.ajax("/api/burger/" + $(this).data("id"), {
            type: "PUT",
            data: { devoure: false }
        }).then(function(){
            console.log("Changed devoure to ", temp);
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