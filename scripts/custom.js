// auth based javascript
const isLoggedIn = sessionStorage.getItem("auth");

const authStatus = document.getElementById("auth-status");

if (isLoggedIn === "true") {
  authStatus.innerHTML = "Logout";
}

function auth() {
  if (isLoggedIn === "true") {
    sessionStorage.removeItem("auth");
    authStatus.innerHTML = "Login";
  } else {
    authStatus.innerHTML = "Logout";
  }
}

let toTopbtn = document.getElementsByClassName("goTop")[0];

let pin = document.getElementById("pin");
let startingPoint = pin.offsetTop;
function backTotop() {
  if (window.pageYOffset <= startingPoint) {
    toTopbtn.classList.add("goTop-hidden");

    toTopbtn.classList.remove("goTop");
  } else {
    toTopbtn.classList.add("goTop");
    toTopbtn.classList.remove("goTop-hidden");
  }
}
//back to top
window.onscroll = function () {
  backTotop();
};

// intro slider
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");

function changeSlider() {}

// news latter
const newsLetter = document.querySelector(".newsLatter-wrapper");
const clsBtnNewsLatter = document.querySelector(".cls-btn-newsletter");

clsBtnNewsLatter.addEventListener("click", function () {
  newsLetter.classList.add("newsLatter-hide");
});

setTimeout(function () {
  newsLetter.classList.remove("hidden-wrapper");
}, 5000);
