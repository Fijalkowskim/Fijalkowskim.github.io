let currentButton = null;
let currentSound = null;
const homeButton = document.querySelector("#btn-home");
const buttons = document.querySelectorAll(".nav-button");
const audioHome = new Audio("home.mp3");
const audioNumero1 = new Audio("../audio/Numero1.mp3");
const audioNumero2 = new Audio("../audio/Numero2.mp3");
const audioNumero3 = new Audio("../audio/Numero3.mp3");
const audioNumero4 = new Audio("../audio/Numero4.mp3");
const audioNumero5 = new Audio("../audio/Numero5.mp3");
const audioHonorableMention = new Audio("../audio/HonorableMention.mp3");

// Functions
function GetHighlight(button) {
  return button.parentElement.querySelector(".highlight");
}
function StopAudio(sound) {
  sound.pause();
  sound.currentTime = 0;
}
function UseAudio(sound) {
  if (currentSound === sound) return;
  if (currentSound !== null) {
    StopAudio(currentSound);
  }
  sound.play();
  currentSound = sound;
}
function StartSetup() {
  console.log(homeButton);
  GetHighlight(homeButton).classList.toggle("transition");
  currentButton = homeButton;
  UseAudio(audioHome);
}
// Main
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentButton === button) return;
    if (currentButton !== null) {
      GetHighlight(currentButton).classList.toggle("transition");
    }
    GetHighlight(button).classList.toggle("transition");
    currentButton = button;
  });
  switch (button.id) {
    case "btn-home":
      button.addEventListener("click", () => {
        UseAudio(audioHome);
      });
      break;
    case "btn-5":
      button.addEventListener("click", () => {
        UseAudio(audioNumero5);
      });
      break;
    case "btn-4":
      button.addEventListener("click", () => {
        UseAudio(audioNumero4);
      });
      break;
    case "btn-3":
      button.addEventListener("click", () => {
        UseAudio(audioNumero3);
      });
      break;
    case "btn-2":
      button.addEventListener("click", () => {
        UseAudio(audioNumero2);
      });
      break;
    case "btn-1":
      button.addEventListener("click", () => {
        UseAudio(audioNumero1);
      });
      break;
    case "btn-honorable-mention":
      button.addEventListener("click", () => {
        UseAudio(audioHonorableMention);
      });
      break;
  }
});

StartSetup();
