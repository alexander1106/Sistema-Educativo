document.addEventListener("DOMContentLoaded", function () {
  // Mostrar modal de ingreso de token
  document.getElementById("code-modal").style.display = "flex";

  // Manejar envío del token
  document.getElementById("code-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const token = document.getElementById("token").value;

    // Aquí deberías enviar el token al servidor para verificarlo
    // Simulación básica de verificación
    if (token === "123456") {
      document.getElementById("reset-token").value = token;
      document.getElementById("code-modal").style.display = "none";
      document.getElementById("reset-password-modal").style.display = "flex";
    } else {
      alert("Token incorrecto. Inténtalo de nuevo.");
    }

    document.getElementById("code-form").reset();
  });

  // Manejar restablecimiento de contraseña
  document.getElementById("reset-password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const newPassword = document.getElementById("new-password").value;
    const resetToken = document.getElementById("reset-token").value;

    // Aquí deberías enviar newPassword y resetToken al servidor para actualizar la contraseña
    // Simulación básica de restablecimiento
    alert(`Contraseña restablecida con éxito.\nNueva contraseña: ${newPassword}\nToken utilizado: ${resetToken}`);

    // Cerrar modal después de restablecer la contraseña
    document.getElementById("reset-password-modal").style.display = "none";
    document.getElementById("reset-password-form").reset();
  });

  // Cerrar ventanas modales al hacer clic en el botón de cerrar
  document.querySelectorAll(".close-button").forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("code-modal").style.display = "none";
      document.getElementById("reset-password-modal").style.display = "none";
    });
  });
});
