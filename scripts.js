const body = document.body;
const box = document.querySelector(".turle");
let text = document.querySelector(".contents");
const secretClick = document.querySelector(".click");
const ui = document.querySelector(".ui");
const easter = document.querySelector(".easter-egg")
const ui2 = document.querySelector(".ui2")
ui2.style.display="none"; 
var clickCounter = 0;

function dialog() {
  box.style.display = "block";
  text.innerText = "WTF?!!";
}

const ost = new Audio("ost.mp3");
ost.volume = 0.3;
ost.loop = true;

function setOstVolume(volume) {
  ost.volume = volume;
}

function incrementCounter() {
  clickCounter++;
  dialog();
  var counterElement = document.getElementById("click-counter");
  counterElement.innerHTML = clickCounter;
  const audio = new Audio("block.mp3");
  audio.play();
  
  var Booster = clickCounter;
  if(Booster === 3){
    box.style.display = "block";
    text.innerText = "Please Stop!";
  }else if(Booster === 4){
    box.style.display = "block";
    text.innerText = "Argh!!!";
  }
  else if(Booster === 5){
    box.style.display = "block";
    text.innerText = "Stop it!";
    hide()
  } else if(Booster === 7){
    box.style.display = "none";
    text.innerText = "";
    ui.style.display = "none";
    ui2.style.display="flex"; 
    setOstVolume(0);
  }
  else if (Booster === 10) {

   easter.style.display="block";
   easter.onclick= function () {
    window.open("easter.html");
}
    ui.style.display = "none";
  }
}

function hide() {
  setTimeout(function () {
    box.style.display = "none";
    text.innerText = "";
  }, 1000);
}

setTimeout(function () {
  if (clickCounter === 0) {
    box.style.display = "block";
    text.innerText = "Better Stay Alert!";
    hide();
  }
}, 6000);

if (incrementCounter) {
  box.style.display = "block";
  text.innerText = "I feel lonely";
}

document.querySelector(".button-app");
const animationContainer = document.querySelector("#animation-container");
function shake() {
  var logo = document.querySelector(".logo");
  var hammerboy = document.querySelector(".hamerboy");
  logo.classList.add("shake");
  hammerboy.classList.add("shake");
  incrementCounter();
  setTimeout(function () {
    logo.classList.remove("shake");
    hammerboy.classList.remove("shake");
  }, 500);
}


function playsnd() {
  const audio = new Audio("1up.mp3");
  const inicio = document.querySelector(".button-app");
  inicio.style.display = "none";
  audio.play();
  const seccion = document.querySelector(".container-start");
  const confirmar = document.createElement("button");
  confirmar.innerText = "Confirm Again";
  seccion.appendChild(confirmar);
  confirmar.classList.add("confirmar");

  confirmar.addEventListener("click", () => {
    ost.play();
    seccion.style.display = "none";
    const loading = document.querySelector(".loading");
    loading.style.display = "flex";
    setTimeout(() => {
      loading.style.display = "none";
      const ui = document.querySelector(".ui");
      ui.style.display = "flex";
    }, 2000);
  });
}

secretClick.addEventListener("click", () => {
  incrementCounter();
});