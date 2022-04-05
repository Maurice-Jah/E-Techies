const studentPage = document.querySelector(".student-page");
const studentChoice = document.querySelector(".student").children;
const studentChoiceArray = Array.from(studentChoice).slice(2);
const body = document.querySelector(".body-class");
const overlay = document.querySelector(".overlay");
const success = document.querySelector(".success");

const displaySuccess = function () {
  overlay.style.display = "block";
  success.style.opacity = "1";
  success.style.visibility = "visible";
  success.style.transform = "translateY(90%)";
};

studentChoiceArray.forEach((choice) => {
  choice.addEventListener("click", () => {
    const course = choice.children[0].textContent;

    const html = `
                    <p class="success-message">You selected <strong> ** ${course} ** </strong> <br> We will get back to you as soon as possible 🤝</p>
                    <p> You have made the right choice. Kudos 👍 </p>
              `;

    success.insertAdjacentHTML("afterbegin", html);
    success.style.backgroundColor = "red";
    displaySuccess();
    setTimeout(() => {
      location.href = "./index.html";
    }, 5000);
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  success.style.display = "none";
  location.href = "./index.html";
});
