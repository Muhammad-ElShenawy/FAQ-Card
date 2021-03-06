let containerEle = document.querySelectorAll(".text-container");
let questions = document.querySelectorAll(".question");
let questionsArr = Array.from(questions);
let answers = document.querySelectorAll(".answer");
let answersArr = Array.from(answers);
let icon = document.querySelectorAll(".arrow-icon");
let iconArr = Array.from(icon);

answersArr.forEach(function (e) {
  e.style.display = "none";
});

for (let i = 0; i < containerEle.length; i++) {
  containerEle[i].addEventListener("click", function () {
    if (containerEle[i] != questionsArr[i]) {
      questionsArr[i].classList.toggle("clicked");
      answersArr[i].style.display = "block";

      if (!questionsArr[i].classList.contains("clicked")) {
        iconArr[i].classList.remove("clicked");

        answersArr[i].style.display = "none";
      } else if (questionsArr[i].classList.contains("clicked")) {
        iconArr[i].classList.add("clicked");
      }
    }
  });
}
