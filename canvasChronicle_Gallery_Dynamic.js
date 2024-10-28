$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).addClass("effect");
    });
    $("img").mouseleave(function(){
        $(this).removeClass("effect");
    });
    $('img').on('click', function(){
        // Get the data-image-id value
        $(".card-container-class-flex").removeClass('hidden');
    }); 
      
      // Click event for the close button
      $(".button-func").click(function() {
        // Hide the white card
        $('.card-container-class-flex').addClass('hidden');
        $(".card-container-class-flex").removeClass('effect-none');
      });
});

  