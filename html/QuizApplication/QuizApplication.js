const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Rome', 'Madrid', 'Berlin'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale'
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', function() {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect!';
    }

    nextBtn.disabled = false;
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.textContent = '';
    nextBtn.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
}

nextBtn.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
        nextBtn.disabled = true;
        resultElement.textContent = '';
    } else {
        showResult();
    }
});

showQuestion();
