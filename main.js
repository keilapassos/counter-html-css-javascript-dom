const start_counter = () => {
  const button_increase = document.querySelector(".increase");
  const button_decrease = document.querySelector(".decrease");
  const span = document.querySelector(".numbers");

  let counter = 0;

  button_increase.addEventListener("click", () => {
    counter++;
    span.innerText = counter;
  });

  button_decrease.addEventListener("click", () => {
    counter--;
    span.innerText = counter;
  });
};

start_counter();
