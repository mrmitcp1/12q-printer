let currentQuestionIndex = 0;


function calculateScore() {
    let totalScore = 0;

    for (let i = 1; i <= 12; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            totalScore += parseInt(selectedAnswer.value);
        }
    }

    document.getElementById("totalScore").innerHTML = `Total Score: ${totalScore}`;

    let job = "";
    if (totalScore >= 50) {
        job = "Software Developer";
    } else if (totalScore >= 30) {
        job = "Data Analyst";
    } else {
        job = "Office Assistant";
    }
    document.getElementById("jobSelection").innerHTML = `Recommended Job: ${job}`;

    let resultURL = `result.html?score=${totalScore}&job=${job}`;
    window.location.href = resultURL;
}

function showQuestion(index) {
    const questionGroups = document.querySelectorAll(".question-group");
    questionGroups.forEach(group => group.classList.remove("active"));
    questionGroups[index].classList.add("active");

    // Update the "Back" and "Next" button visibility
    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    if (index === 0) {
        backButton.style.display = "inline-block , block";
        nextButton.style.display = "inline-block";
    } else if (index === questionGroups.length - 1) {
        backButton.style.display = "inline-block";
        nextButton.style.display = "inline-block , block";
    } else {
        backButton.style.display = "inline-block";
        nextButton.style.display = "inline-block";
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < 11) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

