const chooseProgramButton = document.getElementById("chooseProgram");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

chooseProgramButton.addEventListener("click", () => {
  window.alert(
    "Вы выбрали программу — следующая страница открывается в вашей фантазии.",
  );
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const goalInput = document.getElementById("goal");

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const goalError = document.getElementById("goalError");

  let valid = true;

  nameError.textContent = "";
  phoneError.textContent = "";
  goalError.textContent = "";

  if (!nameInput.value.trim()) {
    nameError.textContent = "Укажите имя";
    valid = false;
  }

  const phonePattern = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = "Введите номер в формате +7 999 000-00-00";
    valid = false;
  }

  if (!goalInput.value) {
    goalError.textContent = "Выберите цель";
    valid = false;
  }

  if (!valid) {
    return;
  }

  formSuccess.hidden = false;
  contactForm.reset();
});
