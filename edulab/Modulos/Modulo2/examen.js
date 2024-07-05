
const correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "a",
  q4: "b",
  q5: "b",
  q6: "a",
  q7: "b",
  q8: "a",
  q9: "b",
  q10: "a",
};
function regresarAHtmlEspecifico() {
  // Construir la ruta completa del archivo HTML
  // Redirigir a la página especificada
  window.location.href = "segundoModulo.html";
}

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
    correctCount = 0;
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
  }
}
