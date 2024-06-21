// Example users database
const users = [];

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    window.location.href = "edulab/index.html"; // Replace with the URL of the homepage
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

document.getElementById("register-button").addEventListener("click", function () {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
});

document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("new-username").value;
  const password = document.getElementById("new-password").value;

  users.push({ firstname, lastname, email, username, password });
  alert("Registro exitoso");

  document.getElementById("register-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
  document.getElementById("register-form").reset();
});

document.getElementById("forgot-password").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("login-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "block";
});

document.getElementById("forgot-password-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("forgot-email").value;
  const user = users.find((user) => user.email === email);

  if (user) {
    alert("Se ha enviado un correo para restablecer su contraseña.");
  } else {
    alert("Correo no encontrado.");
  }

  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
  document.getElementById("forgot-password-form").reset();
});
