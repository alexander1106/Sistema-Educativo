document.addEventListener('DOMContentLoaded', function() {
  // Función para manejar el evento de inscripción
  function handleEnroll(buttonId, courseContainerId, scheduleContainerId) {
    document.getElementById(buttonId).addEventListener('click', function() {
      document.getElementById(courseContainerId).style.display = 'none';
      document.getElementById(scheduleContainerId).style.display = 'block';
    });
  }

  // Función para manejar el evento de aceptación de horario
  function handleAcceptSchedule(buttonId, scheduleContainerId, redirectUrl) {
    document.getElementById(buttonId).addEventListener('click', function() {
      document.getElementById(scheduleContainerId).style.display = 'none';
      alert("¡Te has inscrito exitosamente al curso!");
      window.location.href = redirectUrl;
    });
  }

  // Manejar el primer botón de inscripción y aceptación de horario
  handleEnroll('enroll-button', 'course-container', 'schedule-container');
  handleAcceptSchedule('accept-schedule-button', 'schedule-container', 'primerCurso1.html');

  // Manejar el segundo botón de inscripción y aceptación de horario
  handleEnroll('enroll-button1', 'course-container1', 'schedule-container1');
  handleAcceptSchedule('accept-schedule-button1', 'schedule-container1', 'segundoCurso.html');
});
