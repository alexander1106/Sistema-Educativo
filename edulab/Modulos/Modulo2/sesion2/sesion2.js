function toggleNav() {
    var bar = document.getElementById("bar");
    var close = document.getElementById("close");
    var navDesktop = document.querySelector(".nav-desktop");
  
    if (bar.style.display === "none") {
      bar.style.display = "block";
      close.style.display = "none";
      navDesktop.style.display = "none";
    } else {
      bar.style.display = "none";
      close.style.display = "block";
      navDesktop.style.display = "block";
    }
  }
  function salir() {
    window.location.href = "../../../../index.html";
  }
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfUrl = 'Sesion 6.pdf';  // Ruta al archivo PDF

    // Cargar el PDF en el iframe
    pdfViewer.src = pdfUrl;

    const countdownElement = document.getElementById('countdown');
    let timeLeft = 10300 ; // Tiempo en segundos (ejemplo: 1 hora = 3600 segundos)

    function countdown() {
        const hoursSpan = document.getElementById('hours');
        const minutesSpan = document.getElementById('minutes');
        const secondsSpan = document.getElementById('seconds');

        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
        minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(countdown, 1000);
        } else {
            // Tiempo ha llegado a cero
            const siguienteSesionBtn = document.getElementById('siguienteSesionBtn');
            siguienteSesionBtn.classList.remove('disabled');
            siguienteSesionBtn.style.backgroundColor = 'green'; // Cambia el color a verde (o cualquier otro color deseado)
            siguienteSesionBtn.addEventListener('click', function() {
                // Aquí puedes agregar lógica para pasar a la siguiente página o acción necesaria
                alert('Botón de siguiente sesión clickeado');
            });

            // Mostrar el modal
            const modal = document.getElementById('myModal');
            const span = document.getElementsByClassName('close')[0];
            modal.style.display = 'block';

            // Cerrar el modal cuando el usuario haga clic en (x)
            span.onclick = function() {
                modal.style.display = 'none';
            }

            // Cerrar el modal cuando el usuario haga clic fuera del modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }
        }
    }

    countdown(); // Iniciar el contador al cargar la página
});

document.getElementById("#home").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5501/edulab/index.html";
});
