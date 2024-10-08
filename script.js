const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box"); 

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
}

let questioncount = 0;
let questionnumb = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if(questioncount < questions.length - 1){
        questioncount++;
    showQuestions(questioncount); 
    }
    else{
    alert("question complete!");
    
    }
}
const optionList = document.querySelector('.option-list');
// getting ques and option from array
function showQuestions(index) {
    const questiontext = document.querySelector('.question-text');
    questiontext.textContent =`${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
     <div class="option"><span>${questions[index].options[2]}</span></div>
      <div class="option"><span>${questions[index].options[3]}</span></div>`;

    
    optionList.innerHTML = optionTag;

}