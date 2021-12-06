const  option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4');

const optionsElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
    questionNumber = document.getElementById('number-of-question'),
    numberOfQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion;
let indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0;
const correctAnswer = document.getElementById('correct-answer');
const numberOfAllQuestions = document.getElementById('number-of-all-questions-2');
const btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {
        question: 'Как убрать подчеркивание у гиперссылки?',
        options: [
            'a {decoration:no-underline;}',
            'a {text-decoration:no-underline;}',
            'a {underline:none;}',
            'a {text-decoration:none;}',
        ],
        rightAnswer: 3
    },
    {
        question: 'Какой правильный синтаксис CSS?',
        options: [
            'body {color: black;}',
            '{body:color=black;}',
            'body:color=black;',
            '{body;color:black;}',
        ],
        rightAnswer: 0
    },
    {
        question: 'Какое значение по умолчанию у свойства position?',
        options: [
            'absolute',
            'fixed',
            'static',
            'relative',
        ],
        rightAnswer: 2
    },
    {
        question: 'Как выбрать элемент с id = "block"?',
        options: [
            '*block',
            '.block',
            'block',
            '#block',
        ],
        rightAnswer: 3
    },
];

    
numberOfQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    questionNumber.innerHTML = indexOfPage + 1;
    indexOfPage++;
}


let completeAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if (indexOfPage == questions.length) {
        quizOver();
    }
    else {
        if (completeAnswers.length > 0) {
            completeAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            }
            else {
                indexOfQuestion = randomNumber;
                load();
            }

        }
        if (completeAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completeAnswers.push(indexOfQuestion);

};
for (option of optionsElements) {
    option.addEventListener('click', e => chekAnswer(e));
}
const chekAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        updateAnswerTracker('wrong');
        el.target.classList.add('wrong');
    }
    disabledOption();
}
const disabledOption = () => {
    optionsElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}
const enableOptions = () => {
    optionsElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}
const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}
const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}
const validate = () => {
    if (!optionsElements[0].classList.contains('disabled')) {
        alert('choose the answer');
    } else {
        randomQuestion();
        enableOptions();
    }
}
btnNext.addEventListener('click', () => {
    validate();
})

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions.innerHTML = questions.length;
}
const tryAgain = () => {
    window.location.reload();
}
btnTryAgain.addEventListener('click', () => {
    tryAgain();
});
window.addEventListener('load', () => {
    answerTracker();
    randomQuestion();
});




