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
    var zoomLevel = window.devicePixelRatio || 1;
    var availableHeight = window.innerHeight / zoomLevel;
    $('.master').css('height', availableHeight + 'px');
}
adjustHeight();
$(window).on('resize', function () {
    adjustHeight();
});
$(window).on('resize', function () {
    setTimeout(adjustHeight, 100);
});
const leftone = $('.mv');
const rightone = $('.-mv');
const expC = $('.kagool');
var story='';

expC.on('click', function () {
    $('.pp1').append(generateMarkup());
    story=$('#exampleModal');
    leftone.addClass('moveon').removeClass('moveoff');
    rightone.addClass('moveon-reverse').removeClass('moveoff-reverse');
    story.addClass('moveDown').removeClass('moveDown-reverse');
    leftone.one('animationend', function () {
        leftone.hide();
        $('.pp1').show();
        story.show();
    });
    rightone.one('animationend', function () {
        rightone.hide();
        $('main').hide();
       $('.child').hide();
        $('.pp1').show();
        story.show();
    });
    // story.one('animationend', function () {
    //    // $('.pp1').show();
    //    $('main').hide();
    //    $('.child').hide();
    // });
});
$(document).on('click','.close', function () {
    leftone.removeClass('moveon').addClass('moveoff');
    rightone.removeClass('moveon-reverse').addClass('moveoff-reverse');
    story.removeClass('moveDown').addClass('moveDown-reverse');
    console.log("Classes applied:", leftone.attr('class'), rightone.attr('class'));

    void leftone[0].offsetWidth;
    void rightone[0].offsetWidth;
    void story[0].offsetWidth;
    story.one('animationend', function () {
        $('.pp1').hide();
        $('main').show();
       $('.child').show();
        leftone.show();
        rightone.show();
    });
});