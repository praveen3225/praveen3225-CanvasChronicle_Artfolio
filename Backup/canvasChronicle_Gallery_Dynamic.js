$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).addClass("effect");
    });
    $("img").mouseleave(function(){
        $(this).removeClass("effect");
    });
    $('img').click(function() {
        // Get the src of the clicked image
        $(".card-container-class-flex").removeClass('hidden')
      });
      
      // Click event for the close button
      $(".button-func").click(function() {
        // Hide the white card
        $('.card-container-class-flex').addClass('hidden');
      });
    $('.submitImage').on('click', function(){
        // Get the data-image-id value
        var imageId = $(this).data('image-id');
        
        // Set the value of the hidden input field
        $('#imageData').val(imageId);
        
        // Submit the form
        $('#imageForm').submit();
    });
});

  