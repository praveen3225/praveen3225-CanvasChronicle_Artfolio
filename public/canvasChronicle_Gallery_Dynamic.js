$(document).ready(function(){
    $(".submitImage").mouseenter(function(){
        $(this).addClass("effect");
    });
    $(".submitImage").mouseleave(function(){
        $(this).removeClass("effect");
    });
    $('.submitImage').on('click', function(e){
        // Get the data-image-id value
        e.preventDefault();      
        var imageId = $(this).data('image-id');
        $('.overlay').show(); 
        $(".card-container-class-flex").removeClass('hidden');
        $(".card-container-class-flex").addClass('effect-none');
        // Set the value of the hidden input field
        $('#imageData').val(imageId);
        
        // Submit the form
        var formData = $('#imageForm').serialize(); // Serialize the form data

        // Send form data via AJAX
        $.ajax({
            url: '/', // The POST route
            type: 'POST', // Make sure the request type is POST
            data: formData, // Data being sent to the backend
            success: function(data) {
                console.log('Form submitted successfully');
                console.log(data);
                $('.cardImage').attr('src', './Finished copy/' + data.address);
                $('.card-title').text(data.title);
                $('.card-text').text(data.description);
                $('.date-text').text(data.date_info);
                // Handle successful response here
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error submitting form:', textStatus, errorThrown);
            }
        });
        
    }); 
      
      // Click event for the close button
      $(".button-func").click(function() {
        // Hide the white card
        $('.card-container-class-flex').addClass('hidden');
        $(".card-container-class-flex").removeClass('effect-none');
        $('.overlay').hide();
      });
})

