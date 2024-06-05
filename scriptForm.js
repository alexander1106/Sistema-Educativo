document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get values from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'usuario' && password === 'contraseña') {
      document.getElementById('message').innerHTML = 'Inicio de sesión exitoso';
      window.location.href = 'edulab/index.html';


    } else {
      document.getElementById('message').innerHTML = 'Credenciales inválidas';
    }
  });
  