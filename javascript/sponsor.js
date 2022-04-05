const sponsorForm = document.querySelector(".sponsor-form");
const sponsor = document.querySelector(".sponsor-page");
const sponsorBtn = document.querySelector(".sponsor-btn");
const overlay = document.querySelector(".overlay");
const success = document.querySelector(".success");
const sponsorSubmitBtn = document.querySelector(".sponsor-submit");

sponsorBtn.addEventListener("click", () => {
  sponsor.style.display = "none";
  overlay.style.display = "block";
  sponsorForm.style.opacity = "1";
  sponsorForm.style.visibility = "visible";
});

const displaySuccess = function () {
  overlay.style.display = "block";
  success.style.opacity = "1";
  success.style.visibility = "visible";
  success.style.transform = "translateY(90%)";
};

sponsorSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sponsorForm.style.display = "none";
  displaySuccess();
  setTimeout(() => {
    location.href = "./index.html";
  }, 3000);
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  success.style.display = "none";
  location.href = "./index.html";
});
