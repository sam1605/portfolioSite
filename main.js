$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('.highlight').css({
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        });
    });
    $('.menulink').on('click', function(e) {
        $('.menulink.active').removeClass('active');
        $(this).addClass('active');
    });
    $('main').on('click', function(e) {
        $('.menulink.active').removeClass('active');
    });
    $(".menulink").click(function() {
        var $scrollTo=$(this).data('scroll')
        console.log($scrollTo);
        $('.master').animate({
            scrollTop: $("main").offset().top},
            'slow');
        $('main').animate({
            scrollTop: $('#'+$scrollTo).offset().top},
            'slow');
    });
    function adjustHeight() {
        // Get the current zoom level
        var zoomLevel = window.devicePixelRatio || 1;
        
        // Calculate the available height based on zoom level
        var availableHeight = window.innerHeight / zoomLevel;
        
        // Set the height of the main-content div
        $('.master').css('height', availableHeight + 'px');
    }

    // Call adjustHeight on load
    adjustHeight();
    
    // Call adjustHeight on window resize
    $(window).on('resize', function() {
        adjustHeight();
    });

    // Call adjustHeight on zoom change (debounce to prevent multiple calls)
    $(window).on('resize', function() {
        setTimeout(adjustHeight, 100);
    });
});