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
        $('main').animate({
            scrollTop: $('#'+$scrollTo).offset().top},
            'slow');
    });
});
