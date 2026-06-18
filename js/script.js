const chooseProgramButtons = document.querySelectorAll(
  "[data-scroll-to-programs]",
);

chooseProgramButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "#programs";
  });
});
