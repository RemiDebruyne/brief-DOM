// let victoryScore = document.getElementById("score-setter").value;
let victoryScore = document.getElementById("score-setter").value;

let title = document.querySelector("h1");

let player1 = {
  name: "player1",
  point: 0,
};

let player2 = {
  name: "player2",
  point: 0,
};

function startGame(victoryScore) {
  title.innerHTML = `Playing to ${victoryScore}`;
  player1.point = 0;
  player2.point = 0;
  let s = document.querySelectorAll("span");
  for (span of s) {
    span.innerHTML = "0";
    span.removeAttribute("class");
  }
}

function givePoint(player) {
  player.point++;
  let elem = document.getElementById(player.name);
  elem.innerHTML = `${player.point} `;
  if (player.point >= victoryScore) {
    elem.setAttribute("class", "winner");
  }
}

// update victory score state when the input changes
document
  .getElementById("score-setter")
  .addEventListener(
    "blur",
    () => (victoryScore = document.getElementById("score-setter").value)
  );

// add point to p1
document
  .getElementById("p1")
  .addEventListener("click", () => givePoint(player1));

//add point to p2
document
  .getElementById("p2")
  .addEventListener("click", () => givePoint(player2));

// update victory score state's
document
  .getElementById("score-setter")
  .addEventListener("blur", () => startGame(victoryScore));
