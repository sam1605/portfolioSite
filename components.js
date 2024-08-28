const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".container")

button.addEventListener("click", () => {
  sun.classList.toggle("visible")
  moon.classList.toggle("visible")
  $('.bg-dark, .bg-light').each(function() {
    if ($(this).hasClass('bg-dark')) {
        $(this).removeClass('bg-dark').addClass('bg-light');
    } else if ($(this).hasClass('bg-light')) {
        $(this).removeClass('bg-light').addClass('bg-dark');
    }
});
$('.txt-dark, .txt-light').each(function() {
  if ($(this).hasClass('txt-dark')) {
      $(this).removeClass('txt-dark').addClass('txt-light');
  } else if ($(this).hasClass('txt-light')) {
      $(this).removeClass('txt-light').addClass('txt-dark');
  }
});
})