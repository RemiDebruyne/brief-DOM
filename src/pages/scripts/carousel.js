let images = document.querySelectorAll(".placeholder");

function nextPicture() {
  let currentImage = document.querySelector("[data-current]");

  if (currentImage.nextElementSibling === null) {
    currentImage.removeAttribute("data-current");
    let newCurrent = document.querySelector(".image-wrapper").firstElementChild;
    newCurrent.setAttribute("data-current", "");
  } else {
    let newCurrent = currentImage.nextElementSibling;
    newCurrent.setAttribute("data-current", "");
    currentImage.removeAttribute("data-current");
  }
}

// Use this if you don't have onClick attribut in the html
// let nextButton = document.getElementById("next");
// nextButton.addEventListener("click",() => nextPicture());
// OR without the lamba
// nextButton.addEventListener("click", nextPicture);
