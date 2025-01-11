const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let input = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      input = ""; // ეკრანის გასუფთავება
    } else if (value === "=") {
      try {
        input = eval(input); // შედეგის გამოთვლა
      } catch {
        input = "Error";
      }
    } else {
      input += value; // მონაცემების დამატება
    }

    screen.textContent = input; // ეკრანზე ჩვენება
  });
});
