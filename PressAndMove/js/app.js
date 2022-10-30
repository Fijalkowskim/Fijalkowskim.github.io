const body = document.querySelector("body");
const jakub = document.querySelector("#jakub");
const michal = document.querySelector("#michal");
const olek = document.querySelector("#olek");

let currentCharacter = jakub;
let mouseHold = false;
let imagePath = "";

jakub.addEventListener("click", () => {
  if (currentCharacter === jakub) return;
  ChangeCharacter(
    jakub,
    "url('https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/e9b078cff79a7dc359113524beeb59fa68603307/PressAndMove/img/Jakub.png')"
  );
});
michal.addEventListener("click", () => {
  if (currentCharacter === michal) return;
  ChangeCharacter(
    michal,
    "url('https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/e9b078cff79a7dc359113524beeb59fa68603307/PressAndMove/img/Michal.png')"
  );
});
olek.addEventListener("click", () => {
  if (currentCharacter === olek) return;
  ChangeCharacter(
    olek,
    "url('https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/e9b078cff79a7dc359113524beeb59fa68603307/PressAndMove/img/Olek.png')"
  );
});

body.addEventListener("mousedown", () => (mouseHold = true));
body.addEventListener("mouseup", () => (mouseHold = false));
body.addEventListener("mousemove", (event) => {
  if (!mouseHold) return;
  const xPos = event.pageX;
  const yPos = event.pageY;
  const span = document.createElement("span");
  const size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";
  span.style.backgroundImage = imagePath;
  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
});
body.addEventListener("touchmove", (event) => {
  const xPos = event.touches[0].pageX;
  const yPos = event.touches[0].pageY;
  const span = document.createElement("span");
  const size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";
  span.style.backgroundImage = imagePath;
  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
});

function ChangeCharacter(newCharacter, newImagePath) {
  currentCharacter.classList.remove("chosen-character");
  currentCharacter = newCharacter;
  currentCharacter.classList.add("chosen-character");
  imagePath = newImagePath;
}

ChangeCharacter(jakub);
