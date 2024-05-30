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
  title.innerHTML = `Le nombre de point pour gagner est ${victoryScore}`;
}

function givePoint(player) {
  player.point++;
  let elem = document.getElementById(player.name);
  elem.innerHTML = `${player.point} `;
  if (player.point > victoryScore) {
    elem.setAttribute("class", "winner");
  }
}

function resetGame() {
  player1.point = 0;
  player2.point = 0;
  let s = document.querySelectorAll("span");
  for (span of s) {
    span.innerHTML = "0";
    span.removeAttribute("class");
  }
  title.innerHTML = "Pour quel score jouons nous ?";
}

document
  .getElementById("p1")
  .addEventListener("click", () => givePoint(player1));

document
  .getElementById("p2")
  .addEventListener("click", () => givePoint(player2));

document
  .getElementById("score-setter")
  .addEventListener("blur", () =>
    startGame(document.getElementById("score-setter").value)
  );
