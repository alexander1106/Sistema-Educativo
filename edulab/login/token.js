document.addEventListener('DOMContentLoaded', function() {
  // Crear un objeto URLSearchParams basado en la URL actual
  var params = new URLSearchParams(window.location.search);

  // Obtener el valor del parámetro 'token'
  var tokenValor = params.get('token');

  // Asignar el valor obtenido al campo oculto
  document.getElementById('tokenInput').value = tokenValor;
});

function validateFormToken() {
  const loginFormRec = document.getElementById('reset-password-form');
  //document.getElementById('tokenInput').value = token;
  // Crear un objeto FormData y convertirlo en un objeto normal
  const formData = new FormData(loginFormRec);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
  // Enviar la solicitud POST
  fetch('http://192.168.1.58:3010/api/auth/changePassword?password='+data.password + '&token='+data.token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to reset password');
    }
  })
  .then(result => {
    console.log('Success:', result);
    if (result.data === null) {
      alert('Inserte nueva contraseña');
    } else {
      // Redireccionar a index.html cuando el proceso de reseteo de contraseña sea exitoso
      //window.location.href = 'index.html';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Manejar errores como 400 Bad Request u otros errores de red aquí
    alert('Error al restablecer la contraseña. Por favor, inténtelo de nuevo.');
  });

  // Prevenir el comportamiento predeterminado del formulario
  return false;
}
