// Example users database
const users = [];


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

function validateFormRecuperar() {
  const loginFormRec = document.getElementById('forgot-password-form');
  
  // Crear un objeto FormData y convertirlo en un objeto normal
  const formData = new FormData(loginFormRec);
  const data = Object.fromEntries(formData.entries());
  console.log(data.email)
  // Enviar la solicitud POST
  fetch('http://192.168.1.58:3010/api/auth/reset?email='+data.email, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status === 400) {
      return response.json();
    } else {
      throw new Error('Failed to login');
    }
  })
  .then(result => {
    console.log('Success:', (result.data));
    if (result.data === null) {
      alert('Error correo incorrecta')
    }else{
      alert("Se envio un mensjae a sus correo")
    }
    // Redirigir a otra página
    //
  })
  .catch(error => {
    console.error('Error:', error);
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
  fetch('http://192.168.1.58:3010/api/login', {
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
    console.log('Success:', (result.data));
    if (result.data === null) {
      alert('Error Clave incorrecta')
    }else{
      window.location.href = '/edulab/index.html';
    }
    // Redirigir a otra página
    //
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Prevenir el comportamiento predeterminado del formulario
  return false;
}


