let carousel = document.getElementById("carousel");
let todo = document.getElementById("todo");
let score = document.getElementById("score");
let spans = document.querySelectorAll("span");

// let carSpan = document.getElementById("test");

// carSpan.style.display = "none";

function underlineAnimation(target) {
  target.nextElementSibling.setAttribute("class", "hover-state");
}

function cancelUnderline(target) {
  target.nextElementSibling.setAttribute("class", "default-state");
}

// carousel.addEventListener("mouseover", () => underlineAnimation(carousel));
// carousel.addEventListener("onmouseout", () => cancelUnderline(carousel));
