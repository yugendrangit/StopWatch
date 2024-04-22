let id;
const timer = document.getElementById("timer");
const bot = document.getElementById("bot");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");

let count = 0;
btn.addEventListener("click", function () {
  id = setInterval(() => {
    count += 1;
    timer.textContent = count;
    timer.style.color = "white";
  }, 1000);
});

bot.addEventListener("click", function () {
  timer.style.color = "red";
  clearInterval(id);
});

reset.addEventListener("click", function () {
  clearInterval(id);
  count = 0;
  timer.textContent = count;
  timer.style.color = "black";
});
