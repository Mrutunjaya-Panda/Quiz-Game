const questionJSON = [
  {
    // category: 'Food & Drink',
    // id: 'qa-1',
    correctAnswer: "Three",
    options: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonalds's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "L. Frank Baum",
      "J.K. Rowling",
      "George R.R. Martin",
      "Mark Twain",
    ],
    question: "Who wrote the Wizard of Oz?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "George R.R. Martin",
      "Mark Twain",
    ],
    question: "which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Nanny", "A Sow", "A Lioness", "A Hen"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L Travers",
    options: [
      "P. L Travers",
      "J.K. Rowling",
      "George R.R. Martin",
      "Mark Twain",
    ],
    question: "Who wrote Mary Poppins?",
  },
];

//creating a variable to keep a count of the questions.
let currentQuestionIndex = 0;

let score = 0;
const totalscore = questionJSON.length;
// Accessing all the elements.

const questionEle = document.getElementById("question");

const optionEle = document.getElementById("options");
const scoreEle = document.getElementById("score");
const nextEle = document.getElementById("next");

showQuestion(); //calling the function to display the question

//add event Handling for the next button
nextEle.addEventListener("click",() => {
    if(currentQuestionIndex < questionJSON.length - 1){
        nextquestion();
        scoreEle.textContent = `Score: ${score} / ${totalscore}`;
    }else{
        questionEle.textContent = "Quiz Completed!!";
        optionEle.textContent = ""; //clear the options
        nextEle.style.display = "none"; //hide the next button
    }
})

function showQuestion() {
  //destructuring the called object in an array
  const { correctAnswer, options, question } =
    questionJSON[currentQuestionIndex];
  questionEle.textContent = question; //displaying the question
  const shuffledOptions = shuffleOptions(options);

  //populating the options div with options.
  shuffledOptions.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionEle.appendChild(btn);

    //Event handling for button click
    btn.addEventListener("click", () => {
      if (option === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score); // Just to see the score in the console.
      scoreEle.textContent = `Score: ${score} / ${totalscore}`;
      nextquestion();

    //   questionEle.textContent = "Quiz Completed!!";
    //   optionEle.textContent = ""; //clear the options
    });
  });
}

function nextquestion(){
    currentQuestionIndex++;
    optionEle.textContent = "";//clear the options for the next question
    if(currentQuestionIndex < questionJSON.length){
        showQuestion();
    }else{
        questionEle.textContent = "Quiz Completed!!";
        optionEle.textContent = ""; //clear the options
        nextEle.style.display = "none"; //hide the button
    }
}

// Shuffling the options each time the quiz is loaded/refreshed.
function shuffleOptions(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
