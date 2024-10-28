$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).addClass("effect");
    });
    $("img").mouseleave(function(){
        $(this).removeClass("effect");
    });
    $('.submitImage').on('click', function(){
        // Get the data-image-id value
        var imageId = $(this).data('image-id');
        $(".card-container-class-flex").removeClass('hidden');
        $(".card-container-class-flex").addClass('effect-none');
        
        // Set the value of the hidden input field
        $('#imageData').val(imageId);
        
        // Submit the form using AJAX
        $.ajax({
            url: '/',  // URL to submit the form
            type: 'POST',  // HTTP method
            data: $('#imageForm').serialize(),  // Serialize form data
            success: function(response) {
                // Handle the response here
                console.log(response.test.title); // `response.test` will have the server data
                // You can update the DOM or handle the data as needed
            },
            error: function(error) {
                console.log("Error:", error);
            }
        });
    }); 
      
    // Click event for the close button
    $(".button-func").click(function() {
        // Hide the white card
        $('.card-container-class-flex').addClass('hidden');
        $(".card-container-class-flex").removeClass('effect-none');
    });
});
