$(document).on('mousemove', function (e) {
    $('.highlight').css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
    });
});
$(document).ready(function(){
    showLoader();
    setTimeout(()=>hideLoader(),4000);
});