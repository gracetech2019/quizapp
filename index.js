const quizDB=[

{
    question:"Q1: What is the full form of HTML..?",
    A:"Hypertext Markup Language",
    B:"Hypertext Transport Language",
    C:"Hypertext Makup Language",
    D:"Hypertext Mode Language",
    ans:"ans1"
},

{
    question:"Q2: What is the full form of DOM..?",
    A:"Document Object Mode",
    B:"Document Object Media",
    C:"Document Array Model",
    D:"Document Object Model",
    ans:"ans4"
},

{
    question:"Q3: What is the  full form of BOM..?",
    A:"Browser Object Mode",
    B:"Browser Object Media",
    C:"Browser Object Model",
    D:"Browser Object Medium",
    ans:"ans3"
},
{


    question:"Q4: What is the full form of ES..?",
    A:"ECMAScript",
    B:"Eassy system",
    C:"enviorment system",
    D:"Eco system",
    ans:"ans1"
},

{

    question:"Q5: What is the full form of CSS..?",
    A:"Comman System Style",
    B:"Cascading Style Sheets",
    C:"Command System",
    D:"Change Style System",
    ans:"ans2"
}


];

// Question load all

const question =document.querySelector('.question');
// console.log(question)


const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');


const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

//console.log(answers);

const showScore=document.querySelector('#showScore');






let questionCount=0;
let score= 0;


// load question method
//console.log(quizDB)
// console.log(question.innerHTML)

const loadQuestion=()=>{
    const questionList= quizDB[questionCount];
   
    question.innerHTML   = questionList.question
    option1.innerHTML    = questionList.A
    option2.innerHTML    = questionList.B
    option3.innerHTML    = questionList.C
    option4.innerHTML    = questionList.D   
    

} 





// function define then call

loadQuestion();

const getCheckAnswer =()=>{
let answer;
answers.forEach((curAnsElement)=>{
    if(curAnsElement.checked){
      answer= curAnsElement.id;
     
      
    }
    
});
return  answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElement)=>{
        curAnsElement.checked= false;  
    })

}



submit.addEventListener('click' , ()=>{
const checkedAnswer= getCheckAnswer();
//console.log(checkedAnswer) show id ans use select

if(checkedAnswer===quizDB[questionCount].ans){
    score++;
};

// Question load loop
questionCount++

// after  select option next question de-select option
deselectAll();


if(questionCount < quizDB.length){
    loadQuestion();

    document.getElementById("showScore").disabled = true;

}
else{
    showScore.innerHTML=  `<h3>Your Scored ${score}/${quizDB.length} </h3><button class="btn" onclick="location.reload()">Do you want to Play Again</button>`;
    showScore.classList.remove('scoreArea');
    
 
}

});













