const randomName = document.getElementById("randomName");
const input = document.getElementById("input");
const startQuiz = document.getElementById("startQuiz");
const viewHighScores = document.getElementById("viewHighScores");
const quizBox = document.querySelector(".quizBox");
function generateRandomName() {
    let name = "";
    const lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 1; i <= 4; i++) {
        const randomNum = Math.floor(Math.random() * lowercaseAlphabets.length);
        name += lowercaseAlphabets[randomNum];
    }
    return name;
}

startQuiz.addEventListener("click", () => {
    const inputVal = input.value;
    let properVal = "";
    for (let i = 0; i < inputVal.length; i++) {
        if (inputVal[i] !== " ") {
            properVal += inputVal[i];
        }
    }
    if (properVal == "" || (properVal.length < 3)) {
        alert("please give a proper name to start");
    }
    else {
        window.location.href = "./game.html";
    }
});

randomName.addEventListener("click", () => {
    const randonNameUser = generateRandomName();
    input.value = randonNameUser;
})

viewHighScores.addEventListener("click", () => {
    quizBox.innerHTML = `<h1>no high scores</h1>`
})
