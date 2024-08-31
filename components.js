const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".container")

button.addEventListener("click", () => {
    sun.classList.toggle("visible")
    moon.classList.toggle("visible")
    $('[class*="-dark"], [class*="-light"]').each(function () {
        // Get the list of classes for the current element
        var classes = $(this).attr('class').split(' ');

        // Iterate over each class and modify it if it contains -dark or -light
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].includes('-dark')) {
                window.dark=false;
                $(this).removeClass(classes[i]).addClass(classes[i].replace('-dark', '-light'));
            } else if (classes[i].includes('-light')) {
                window.dark=true;
                $(this).removeClass(classes[i]).addClass(classes[i].replace('-light', '-dark'));
            }
        }
    });
})