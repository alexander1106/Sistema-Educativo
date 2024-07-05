function regresarAHtmlEspecifico() {
    // Construir la ruta completa del archivo HTML
    // Redirigir a la página especificada
    window.location.href = "primerCurso1.html";
  }
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

const correctAnswers = {
  q1: "a",
  q2: "c",
  q3: "b",
  q4: "c",
  q5: "b",
  q6: "b",
  q7: "b",
  q8: "a",
  q9: "b",
  q10: "c",
};

function evaluateQuiz() {
  let form = document.getElementById("quizForm");
  let resultDiv = document.getElementById("result");
  let errorDiv = document.getElementById("error");
  let formData = new FormData(form);
  let correctCount = 0;
  let totalQuestions = 10;

  let answeredQuestions = {};
  for (let [name, value] of formData.entries()) {
    answeredQuestions[name] = value;
  }

  if (Object.keys(answeredQuestions).length < totalQuestions) {
    errorDiv.style.display = "block";
    resultDiv.style.display = "none";
  } else {
    errorDiv.style.display = "none";
    resultDiv.innerHTML = "";
    let questionResult = "";

    for (let i = 1; i <= totalQuestions; i++) {
      let questionName = `q${i}`;
      let userAnswer = answeredQuestions[questionName];
      let correctAnswer = correctAnswers[questionName];

      if (userAnswer === correctAnswer) {
        correctCount++;
        questionResult += `<p class="correct">Pregunta ${i}: Correcta</p>`;
      } else {
        questionResult += `<p class="incorrect">Pregunta ${i}: Incorrecta (Tu respuesta: ${userAnswer}, Respuesta correcta: ${correctAnswer})</p>`;
      }
    }

    let incorrectCount = totalQuestions - correctCount;
    let score = correctCount * 2;

    resultDiv.innerHTML += `<p>Preguntas correctas: ${correctCount}</p>
                             <p>Preguntas incorrectas: ${incorrectCount}</p>
                             <p>Calificación: ${score}</p>
                             ${questionResult}`;
    resultDiv.style.display = "block";

    // Call function to send the score to the database
    sendScoreToDatabase(score);
  }
}

function sendScoreToDatabase(score) {
  const idUsuario = localStorage.getItem("idUsuario");
  const moduloId = "modulo-presupuesto-ahorro";

  const data = {
    idUsuario: idUsuario,
    moduloId: moduloId,
    notamodulo: score,
  };

  fetch("http://api.bluetabdemo.site/api/registrarmodulo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Procesar la respuesta si todo está bien
      }
      throw new Error("Error al enviar datos"); // Lanzar un error si hay problemas con la solicitud
    })
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert("Calificación enviada correctamente.");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar la calificación.");
    });
}

