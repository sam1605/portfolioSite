const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".container")

button.addEventListener("click", () => {
  sun.classList.toggle("visible")
  moon.classList.toggle("visible")
})