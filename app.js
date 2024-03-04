document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("mainForm");
  const name = document.querySelector("name");
  const email = document.querySelector("email");
  const phone = documet.querySelector("phone");
  const password = document.querySelector("password");
  const message = document.querySelector("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkInputs()) {
      showModal();
    }
  });
  name.addEventListener("input", () => {
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
  });

  email.addEventListener("input", () => {
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
  });

  phone.addEventListener("input", () => {
    validateField(phone, isPhone(phone.value.trim()), "Not a valid phone");
  });
});
