const contactBtn = document.querySelector(".contact-btn");
const success = document.querySelector(".success");
const overlay = document.querySelector(".overlay");

const validateForm = function () {
  const inputs = document.getElementsByTagName("input");
  const comment = document.getElementById("comment");
  const inputsArray = Array.from(inputs);

  let inputsBox = [];
  for (let i = 0; i < inputsArray.length; i++) {
    let input = inputsArray[i].value;
    inputsBox.push(input);
  }

  if (inputsBox.includes(false)) {
    alert("Fill all the forms");
  } else if (comment.value == "") {
    alert("Fill all the forms");
  } else {
    displaySuccess();
    setTimeout(() => {
      location.href = "./index.html";
    }, 3000);
  }
};

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  success.style.display = "none";
  location.href = "./index.html";
});

const displaySuccess = function () {
  overlay.style.display = "block";
  success.style.opacity = "1";
  success.style.visibility = "visible";
  success.style.transform = "translateY(90%)";
};

// For the sign up and sign in
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
