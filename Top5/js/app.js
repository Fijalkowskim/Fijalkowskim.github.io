let currentButton = null;
let currentSound = null;
const startButton = document.querySelector("#btn-start");
const homeButton = document.querySelector("#btn-home");
const buttons = document.querySelectorAll(".nav-button");
const hidden = document.querySelector(".hidden");

const audioHome = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/home.mp3?raw=true"
);
const audioNumero1 = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/Numero1.mp3?raw=true"
);
const audioNumero2 = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/Numero2.mp3?raw=true"
);
const audioNumero3 = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/Numero3.mp3?raw=true"
);
const audioNumero4 = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/Numero4.mp3?raw=true"
);
const audioNumero5 = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/Numero5.mp3?raw=true"
);
const audioHonorableMention = new Audio(
  "https://github.com/Fijalkowskim/Fijalkowskim.github.io/blob/main/Top5/audio/HonorableMention.mp3?raw=true"
);
//

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
  startButton.addEventListener("click", () => {
    UseAudio(audioHome);
    startButton.classList.add("hidden");
    hidden.classList.remove("hidden");
  });

  GetHighlight(homeButton).classList.toggle("transition");
  currentButton = homeButton;
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
