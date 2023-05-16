const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username === "naveen" && password === "12345") {
    window.location.href = "homepage.html";
  } else {
    errorMessage.innerHTML = "Incorrect username or password";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
  }
});
