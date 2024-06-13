document.getElementById('enroll-button').addEventListener('click', function() {
    document.getElementById('course-container').style.display = 'none';
    document.getElementById('schedule-container').style.display = 'block';
  });
  
  document.getElementById('accept-schedule-button').addEventListener('click', function() {

    document.getElementById('schedule-container').style.display = 'none';
    alert("¡Te has inscrito exitosamente al curso!");
    window.location.href = "primerCurso1.html";
  });
  