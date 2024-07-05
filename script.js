document.addEventListener("DOMContentLoaded", () => {
  const inputValue = document.getElementById("user-input");

  // Handle number and dot button clicks
  document.querySelectorAll(".numbers").forEach(item => {
    item.addEventListener("click", e => {
      if (inputValue.innerText === "NaN" || inputValue.innerText === "Infinity") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0" && e.target.innerText !== ".") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerText;
    });
  });

  // Handle operations button clicks
  document.querySelectorAll(".operations").forEach(item => {
    item.addEventListener("click", e => {
      const operation = e.target.innerText;
      const lastChar = inputValue.innerText[inputValue.innerText.length - 1];

      if (operation === "=") {
        try {
          inputValue.innerText = eval(inputValue.innerText);
        } catch {
          inputValue.innerText = "NaN";
        }
      } else if (operation === "AC") {
        inputValue.innerText = "0";
      } else if (operation === "DEL") {
        inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
      } else if (!isNaN(lastChar) || lastChar === ".") {
        inputValue.innerText += operation;
      }
    });
  });
});
