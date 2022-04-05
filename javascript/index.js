let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

const overlay = document.querySelector(".overlay");
const signUpBtn = document.querySelector(".btn-signUp");
const signInBtn = document.querySelector(".btn-signIn");
const signUp = document.querySelector(".signUp");
const signIn = document.querySelector(".signIn");
const signUpSubmit = document.querySelector(".signUpSubmit-btn");
const signInSubmit = document.querySelector(".signInSubmit-btn");
const interest = document.querySelectorAll(".interest");
const close = document.querySelector(".close");
const closeSignIn = document.querySelector(".close-signIn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "block";
  signUp.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  signUp.style.display = "none";
  signIn.style.display = "none";
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "block";
  signIn.style.display = "block";
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
  signUp.style.display = "none";
});

closeSignIn.addEventListener("click", () => {
  overlay.style.display = "none";
  signIn.style.display = "none";
});

signUpSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  interest.forEach((e) => {
    if (e.checked) {
      if (e.value == "student") location.href = "./student.html";
      if (e.value == "sponsor") location.href = "./sponsor.html";
    }
  });
});

signInSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "./student.html";
});

// Button register
const btnRegister = document.querySelectorAll(".btn-register");

btnRegister.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.display = "block";
    signUp.style.display = "block";
  });
});
