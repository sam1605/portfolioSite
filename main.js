
$(document).on('mousemove', function (e) {
    $('.highlight').css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
    });
});
$('.menulink').on('click', function (e) {
    $('.menulink.active').removeClass('active');
    $(this).addClass('active');
});
$('main').on('click', function (e) {
    $('.menulink.active').removeClass('active');
});
$(".menulink").click(function () {
    var $scrollTo = $(this).data('scroll')
    console.log($scrollTo);
    $('.master').animate({
        scrollTop: $("main").offset().top
    },
        'slow');
    $('main').animate({
        scrollTop: $('#' + $scrollTo).offset().top
    },
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
$(window).on('resize', function () {
    adjustHeight();
});

// Call adjustHeight on zoom change (debounce to prevent multiple calls)
$(window).on('resize', function () {
    setTimeout(adjustHeight, 100);
});
const leftone = $('.mv');
const rightone = $('.-mv');
const expC = $('.kagool');

expC.on('click', function () {
    leftone.addClass('moveon').removeClass('moveoff');
    rightone.addClass('moveon-reverse').removeClass('moveoff-reverse');
    leftone.one('animationend', function () {
        leftone.hide();
        $('.pp1').show();
    });
    rightone.one('animationend', function () {
        rightone.hide();
    });
});
$('.close').on('click', function () {
    $('.pp1').hide(); // Hide the content before reversing the animation
    leftone.removeClass('moveon').addClass('moveoff');
    rightone.removeClass('moveon-reverse').addClass('moveoff-reverse');
    console.log("Classes applied:", leftone.attr('class'), rightone.attr('class'));

    void leftone[0].offsetWidth;
    void rightone[0].offsetWidth;

    // Handle the reverse animation end event for both elements
    leftone.one('animationend', function () {
        leftone.show(); // Show the left one after the reverse animation
    });

    rightone.one('animationend', function () {
        rightone.show(); // Show the right one after the reverse animation
    });
    setTimeout(function () {
        console.log("Manually ending reverse animation via timeout");
        leftone.show();
        rightone.show();
    }, 100);
});