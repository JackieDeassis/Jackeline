function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const xPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5; 
    const size = Math.random() * 5 + 5; 
    const color = Math.random() > 0.5 ? 'white' : 'white'; 
    
    snowflake.style.left = `${xPosition}px`;
    snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; 
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.backgroundColor = color; 

    document.getElementById("snowflakes").appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, (delay + 10) * 1000); 
}

setInterval(createSnowflake, 100);

const questions = [
    {
        question: "In which country did the tradition of putting up a Christmas tree originate?",
        options: ["Germany", "Mexico", "Russia", "Brazil"],
        correct: 0
    },
    {
        question: "What do people traditionally place at the top of a Christmas tree?",
        options: ["Star", "Angel", "Santa", "Snowflake"],
        correct: 0
    },
    {
        question: "What is Frosty the Snowman made of?",
        options: ["Snow", "Ice", "Rock", "Wood"],
        correct: 0
    },
    {
        question: "Which reindeer has a red nose?",
        options: ["Rudolph", "Blitzen", "Comet", "Dasher"],
        correct: 0
    },
    {
        question: "What is the name of the Grinch's dog?",
        options: ["Max", "Rex", "Buddy", "Charlie"],
        correct: 0
    },
    {
        question: "What holiday beverage is known as 'milk punch'?",
        options: ["Eggnog", "Cider", "Hot Chocolate", "Lemonade"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    const quizContainer = document.getElementById("quiz-container");

    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${question.options.map((option, index) => 
                `<button class="option" onclick="checkAnswer(${index})">${option}</button>`
            ).join("")}
        </div>
    `;
}

function checkAnswer(selected) {
    const question = questions[currentQuestion];
    if (selected === question.correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultMessage = document.getElementById("result-message");
    const scoreDisplay = document.getElementById("score");
    const resultContainer = document.getElementById("result-container");

    resultMessage.textContent = score >= 4 
        ? "Congrats, you're on the Nice List! " 
        : "Oops, you're on the Naughty List! ";
    scoreDisplay.textContent = `${score} out of ${questions.length}`;

    resultContainer.classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");
}

document.getElementById("restart-btn").addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
});

loadQuestion();
