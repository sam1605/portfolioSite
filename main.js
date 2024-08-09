$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('.highlight').css({
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        });
    });
});
