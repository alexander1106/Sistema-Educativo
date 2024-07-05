// Example users database
const users = [];
var modal = document.getElementById('errorModal');
var showErrorBtn = document.getElementById('showErrorBtn');
var closeBtn = document.getElementsByClassName('close-btn')[0];
document.getElementById("register-button").addEventListener("click", function () {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
});

function validateRegisterForm() {
  const registerForm = document.getElementById('register-form');
  
  // Obtener valores de los campos del formulario
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  const tipoUsuario = '01';

  // Validar que los campos requeridos no estén vacíos
  if (!firstname || !lastname || !email || !username || !password ) {
    alert('Por favor completa todos los campos.');
    return false;
  }

  // Crear objeto con los datos del usuario
  const userData = {
    nombre: firstname,
    apellido: lastname,
    correo: email,
    usuario: username,
    clave: password,
    tipoUsuario: tipoUsuario
  };

  // Simular una solicitud POST al servidor
  fetch('http://api.bluetabdemo.site/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al registrar usuario: ' + response.status + ' ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Registro exitoso:', data);
    alert('Registro exitoso');
    registerForm.reset(); // Limpiar el formulario después de registrar
    window.location.href = 'index.html'; 

  })
  .catch(error => {
    console.error('Error:', error.message);
    alert('Error al registrar usuario: ' + error.message);
  });

  // Prevenir el envío del formulario por defecto
  return false;
}


document.getElementById("forgot-password").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("login-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "block";
});

function validateFormRecuperar() {
  const loginFormRec = document.getElementById('forgot-password-form');

  // Crear un objeto FormData y convertirlo en un objeto normal
  const formData = new FormData(loginFormRec);
  const data = Object.fromEntries(formData.entries());
  console.log(data.email);

  // Enviar la solicitud POST
  fetch('http://api.bluetabdemo.site/api/auth/reset?email=' + data.email, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 400) {
      return response.json().then(result => { throw new Error(result.message || 'Correo incorrecto'); });
    } else {
      throw new Error('Failed to reset password');
    }
  })
  .then(result => {
    console.log('Success:', result);
    if (result.data === null) {
      alert('Se envió un mensaje a su correo');

    } else {
      alert('Error correo incorrecto');

    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message || 'Error al procesar la solicitud');
  });

  // Prevenir el comportamiento predeterminado del formulario
  return false;
}


function validateForm() {
  const loginForm = document.getElementById('login-form');
  
  // Crear un objeto FormData y convertirlo en un objeto normal
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  // Enviar la solicitud POST
  fetch('http://api.bluetabdemo.site/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to login');
    }
  })
  .then(result => {
    console.log('Success:', result.data);

    // Guardar datos en localStorage si la autenticación es exitosa
    const nombre = result.data.nombre; // Suponiendo que 'nombre' es un campo devuelto por la API
    const apellidos = result.data.apellidos; // Suponiendo que 'apellidos' es un campo devuelto por la API
    const idUsuario = result.data.idUsuario; // Suponiendo que 'idUsuario' es un campo devuelto por la API

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellidos', apellidos);
    localStorage.setItem('idUsuario', idUsuario);

    // Redirigir a otra página si es necesario
    // window.location.href = '/edulab/index.html';

    // Mostrar los valores guardados en la consola para verificar
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('ID de Usuario:', idUsuario);
    window.location.href = 'edulab/index.html'; 


  })
  .catch(error => {
    console.error('Error:', error);
    modal.style.display = 'block';
    closeBtn.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }

    loginForm.reset();
  });

  // Prevenir el comportamiento predeterminado del formulario
  return false;
}



