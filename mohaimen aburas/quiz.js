const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Ozone"],
        answer: 0
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: 1
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "500,000 km/s"],
        answer: 0
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.D. Salinger"],
        answer: 1
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Mars", "Earth", "Mercury"],
        answer: 3
    }
    

];


let currentQuestion = 0;
let score = 0;
let selectedAnswers = []; // To store the player's selected answers

// Function to load question
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        // End of quiz, show the score and correct answers
        showScore();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("option-1").innerText = q.options[0];
    document.getElementById("option-2").innerText = q.options[1];
    document.getElementById("option-3").innerText = q.options[2];
    document.getElementById("option-4").innerText = q.options[3];
    updateProgress();
}

// Function to handle option click
function selectOption(optionIndex) {
    selectedAnswers.push(optionIndex); // Store the player's selected answer

    const correctAnswer = questions[currentQuestion].answer;

    if (optionIndex === correctAnswer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}

// Function to update progress bar
function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
}

// Function to show score and correct answers
function showScore() {
    document.getElementById("quiz-container").classList.add("d-none");
    document.getElementById("score-display").classList.remove("d-none");

    // Display the score
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;

    // Display correct answers
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Clear previous content

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("result-item");

        // Display question
        const questionText = document.createElement("p");
        questionText.innerText = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        // Display player's answer
        const playerAnswer = document.createElement("p");
        playerAnswer.innerText = `Your Answer: ${
            selectedAnswers[index] !== undefined
                ? q.options[selectedAnswers[index]]
                : "No answer selected"
        }`;
        playerAnswer.style.color = selectedAnswers[index] === q.answer ? "green" : "red";
        questionDiv.appendChild(playerAnswer);

        // Display correct answer
        const correctAnswer = document.createElement("p");
        correctAnswer.innerText = `Correct Answer: ${q.options[q.answer]}`;
        correctAnswer.style.color = "blue";
        questionDiv.appendChild(correctAnswer);

        resultsContainer.appendChild(questionDiv);
    });
}

// Add event listeners to options
document.getElementById("option-1").addEventListener("click", () => selectOption(0));
document.getElementById("option-2").addEventListener("click", () => selectOption(1));
document.getElementById("option-3").addEventListener("click", () => selectOption(2));
document.getElementById("option-4").addEventListener("click", () => selectOption(3));

// Load the first question
loadQuestion();
