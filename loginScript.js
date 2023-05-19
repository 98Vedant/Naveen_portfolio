const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  // Load the credentials from the text file
  fetch("credentials.txt")
    .then(response => response.text())
    .then(data => {
      // Split the data into username and password
      const [fileUsername, filePassword] = data.trim().split("\n");

      if (username === fileUsername && password === filePassword) {
        window.location.href = "homepage.html";
      } else {
        errorMessage.innerHTML = "Incorrect username or password";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
      }
    })
    .catch(error => {
      errorMessage.innerHTML = "Error occurred while loading credentials";
      errorMessage.style.color = "red";
      errorMessage.style.display = "block";
      console.error(error);
    });
});
