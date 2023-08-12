let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Expression error";
      }
      screen.value = result;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", modeToggle.checked);
});
document.addEventListener("keydown", event => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    screenValue += key;
    updateDisplay();
  } else if (/[\+\-\*\/]/.test(key)) {
    screenValue += key;
    updateDisplay();
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    screenValue = screenValue.slice(0, -1);
    updateDisplay();
  }
});
function updateDisplay() {
  screen.value = screenValue;
}

function calculate() {
  var result;
  try {
    result = eval(screenValue);
  } catch (error) {
    result = "Expression error";
  }
  screen.value = result;
  screenValue = result.toString();
}

updateDisplay();
  

