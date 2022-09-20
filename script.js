let randomNum;
function generateNum() {
  let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log(random);
  return random;
}
let generateNumberBtn = document.querySelector(".generate-random-number");
generateNumberBtn.addEventListener("click", function () {
  randomNum = generateNum();
  console.log(randomNum);
});

let guessInput = document.querySelector(".guess-number");
let result7 = document.querySelector(".result7");
let message = document.querySelector(".message");

guessInput.addEventListener("change", function () {
  message.classList.remove("visible");
});

guessInput.addEventListener("input", function guessNumber() {
  let uservalue = Number(guessInput.value);
  console.log(randomNum);
  console.log(uservalue > randomNum);
  if (randomNum > uservalue) {
    message.classList.add("visible");
    message.textContent = "введите число побольше";
    //alert("введите число побольше");
  } else if (randomNum < uservalue) {
    message.classList.add("visible");
    message.textContent = "введите число поменьше";
    //alert("введите число поменьше");
  } else if (uservalue === randomNum) {
    message.classList.add("visible");
    message.textContent = "Вы угадали!";
    guessInput.removeEventListener("input", guessNumber);
    guessInput.textContent = "играть опять";
    //alert("Угадала!");
  }
});
