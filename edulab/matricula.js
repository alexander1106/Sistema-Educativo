// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtener los elementos de los modales y los botones
  var enrollModal = document.getElementById('enrollModal');
  var enrollModal2 = document.getElementById('enrollModal2');
  var enrollModal3 = document.getElementById('enrollModal3');
  var successModal = document.getElementById('successModal');
  var successModal2 = document.getElementById('successModal2');
  var successModal3 = document.getElementById('successModal3');

  var confirmEnroll1 = document.getElementById('confirmEnroll1');
  var confirmEnroll2 = document.getElementById('confirmEnroll2');
  var confirmEnroll3 = document.getElementById('confirmEnroll3');

  var cancelEnroll1 = document.getElementById('cancelEnroll1');
  var cancelEnroll2 = document.getElementById('cancelEnroll2');
  var cancelEnroll3 = document.getElementById('cancelEnroll3');

  var closeSuccess1 = document.getElementById('closeSuccess1');
  var closeSuccess2 = document.getElementById('closeSuccess2');
  var closeSuccess3 = document.getElementById('closeSuccess3');

  // Función para mostrar el modal de inscripción correspondiente
  function showEnrollModal(modal) {
      modal.style.display = 'block';
  }

  // Función para ocultar el modal de inscripción correspondiente
  function hideEnrollModal(modal) {
      modal.style.display = 'none';
  }

  // Función para mostrar el modal de éxito correspondiente
  function showSuccessModal(modal) {
      modal.style.display = 'block';
  }

  // Función para ocultar el modal de éxito correspondiente
  function hideSuccessModal(modal) {
      modal.style.display = 'none';
  }

  // Event listeners para mostrar y ocultar los modales
  confirmEnroll1.addEventListener('click', function() {
      hideEnrollModal(enrollModal);
      showSuccessModal(successModal);
  });

  confirmEnroll2.addEventListener('click', function() {
      hideEnrollModal(enrollModal2);
      showSuccessModal(successModal2);
  });

  confirmEnroll3.addEventListener('click', function() {
      hideEnrollModal(enrollModal3);
      showSuccessModal(successModal3);
  });

  cancelEnroll1.addEventListener('click', function() {
      hideEnrollModal(enrollModal);
  });

  cancelEnroll2.addEventListener('click', function() {
      hideEnrollModal(enrollModal2);
  });

  cancelEnroll3.addEventListener('click', function() {
      hideEnrollModal(enrollModal3);
  });

  closeSuccess1.addEventListener('click', function() {
      hideSuccessModal(successModal);
  });

  closeSuccess2.addEventListener('click', function() {
      hideSuccessModal(successModal2);
  });

  closeSuccess3.addEventListener('click', function() {
      hideSuccessModal(successModal3);
  });
});
alert(localStorage.getItem('idUsuario'))
function salir(){
  window.location.href = 'index.html'; 

}

function registroModulo(moduloId) {
  // Obtener el idUsuario desde localStorage o de donde lo obtengas
  const idUsuario = localStorage.getItem('idUsuario');
  
  // Crear el objeto con los datos del módulo específico
  const modulo = {
    idModulo: moduloId,
    idUsuario: idUsuario,
  };

  // Enviar los datos por fetch
  fetch('http://api.bluetabdemo.site/api/registrarmodulo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(modulo)
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Procesar la respuesta si todo está bien
    }
    throw new Error('Error al enviar datos'); // Lanzar un error si hay problemas con la solicitud
  })
  .then(data => {
    // Aquí puedes manejar la respuesta del servidor si es necesario
    console.log('Respuesta del servidor:', data);
    alert('Datos enviados correctamente.');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Ocurrió un error al enviar los datos.');
  });

  // Devolver false para prevenir el envío del formulario por defecto si estás en un formulario HTML
  return false;
}
