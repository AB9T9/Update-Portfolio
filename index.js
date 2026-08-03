const form = document.getElementById("msgForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Message submitted successfully!");

  form.reset();
});
