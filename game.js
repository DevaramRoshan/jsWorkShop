const timerBox = document.querySelector(".timer");
const questionBox = document.querySelector(".question");
const optionBox = document.querySelector(".optionBox");
const saveAndNext = document.getElementById("saveAndNext");
const previous = document.getElementById("previous");

let arr = ["is js a dynamically typed language", "does js support recurssion"];
let timeLeft = 60;
function startTimer() {
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            startTimerAgain();
            showQuestion();
        } else {
            timerBox.textContent = `time:${timeLeft}`;
            timeLeft--;
        }
    }, 1000);
}

let questionCount = 0;
function showQuestion() {
    questionBox.textContent = arr[questionCount];
    questionCount++;
}

showQuestion();
generateOptions();

let ansArr = [];

function checkCurrentQuestion(qno, ans) {
    ansArr.push([qno, ans]);
    console.log(ansArr);
}

function generateOptions() {
    const yes = document.createElement("button");
    const no = document.createElement("button");
    yes.textContent = "yes";
    no.textContent = "no";
    optionBox.appendChild(yes);
    optionBox.appendChild(no);
    yes.addEventListener("click", () => {
        checkCurrentQuestion(questionCount, "yes");
    });
    no.addEventListener("click", () => {
        checkCurrentQuestion(questionCount, "no");
    })
}

function startTimerAgain() {
    timeLeft = 60;
    startTimer();
}

saveAndNext.addEventListener("click", () => {
    showQuestion();
    startTimerAgain();
})
startTimer();

