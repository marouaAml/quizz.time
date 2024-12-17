
let score = 0; 
let currentQuestionIndex = 0; 
let timerInterval; 
const questions = [
    {
        question: "Quelle est la capitale du Maroc ?",
        answers: ["Marrakesh", "Fes", "Casablanca", "Rabat"],
        correctAnswer: "Rabat"
    },
    {
        question: "Qui a peint la Mona Lisa ?",
        answers: ["Léonard de Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Léonard de Vinci"
    },
    {
        question: "Quel est le pays d'origine de la pizza ?",
        answers: ["France", "Espagne", "Italie", "Grèce"],
        correctAnswer: "Italie"
    },
    {
        question: "Qui a écrit la pièce 'Roméo et Juliette' ?",
        answers: ["William Shakespeare", "Molière", "Friedrich Schiller", "Tennessee Williams"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Quel est le nom de la chaîne de montagnes qui traverse le Maroc ?",
        answers: ["Atlas", "Himalaya", "Alpes", "Appalaches"],
        correctAnswer: "Atlas"
    },
    {
        question: "Quel est le nom de la monnaie utilisée au Maroc ?",
        answers: ["Dinar", "Dirham", "Peso", "Franco"],
        correctAnswer: "Dirham"
    },
    {
        question: "Quel est le nom du festival culturel annuel qui se déroule à Essaouira ?",
        answers: ["Festival de Marrakech", "Festival Gnaoua", "Festival de Fès", "Festival des Roses"],
        correctAnswer: "Festival Gnaoua"
    },
];

function startQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("regles").style.display = "none";
    document.getElementById("image1").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("result-page").style.display = "none";
    startTimer();
    showQuestion();
}
function startTimer() {
    const timerElement = document.getElementById("timer");
    
   
    clearInterval(timerInterval);

    timeLeft = 15;
    timerElement.textContent = "Temps restant: " + timeLeft;

    
    timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = "Temps restant: " + timeLeft;

      
        if (timeLeft <= 0) {
            clearInterval(timerInterval);  
            showCorrectAnswer();  
        }
    }, 1000); }

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        let questionData = questions[currentQuestionIndex];
        document.getElementById("question").textContent = questionData.question;

        let answersHTML = "";
        questionData.answers.forEach(answer => {
            answersHTML += `<button class="answer-btn" onclick="checkAnswer('${answer}')">${answer}</button><br>`;
        });

        document.getElementById("answers").innerHTML = answersHTML;
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++; 
    showQuestion(); 
}

function showCorrectAnswer() {
  
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    alert("Temps écoulé! La bonne réponse était: " + correctAnswer);
    currentQuestionIndex++; 
    showQuestion(); 
}

function endQuiz() {

    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("result-page").style.display = "block";
    document.getElementById("score").textContent = "Score: " + score;
}

document.getElementById("Rejouer").addEventListener("click", function() {
    
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("regles").style.display = "block";
    document.getElementById("image1").style.display="none"; 

   startTimer();
    showQuestion();
});

document.getElementById("Quitter").addEventListener("click", function()
 {  score = 0;
    currentQuestionIndex = 0;
    document.getElementById("home-page").style.display = "block";
    document.getElementById("regles").style.display = "block";
    document.getElementById("image1").style.display="block"; 
    document.getElementById("result-page").style.display = "none";

    startTimer();
    showQuestion();
});


