const questions = [
    {
        question : "Which of the following JavaScript cannot do?",
        answers : [
            {text:"JavaScript can react to events", correct:false},
            {text:"JavaScript can manipulate HTML elements", correct:false},
            {text:"JavaScript can be use to validate data", correct:false},
            {text:"All of the Above", correct:true},
        ]
    },
    {
        question : "Whats so great about XML?",
        answers : [
            {text:"Easy data exchange", correct:false},
            {text:"High speed on network", correct:false},
            {text:"Only B.is correct", correct:false},
            {text:"Both A & B", correct:true},
        ]
    },
    {
        question : "Which of the following options is correct with regard to HTML?",
        answers : [
            {text:"It is a modelling language", correct:false},
            {text:"It is a scripting language", correct:false},
            {text:"It is used to structure documents", correct:true},
            {text:"It is a partial programming language", correct:false},
        ]
    },
    {
        question : "The attribute used to define a new namespace is.",
        answers : [
            {text:"Xmlns", correct:true},
            {text:"XMLNS", correct:false},
            {text:"XmlNameSpace", correct:false},
            {text:"XmlNs", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();